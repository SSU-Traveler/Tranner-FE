import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { getPlaces, getPopularPlaces } from '../api/place.api';
import { CustomNextArrow, CustomPrevArrow } from '../components/arrow/CustomArrow';
import SpotCard from '../components/card/SpotCard';
import DataLoading from '../components/common/DataLoading';
import FilterButton from '../components/common/FilterButton';
import PlaceInput from '../components/input/PlaceInput';
import { CITY_OPTIONS } from '../constants/options';
import { useAlarm } from '../hooks/useAlarm';
import { useChainOption } from '../hooks/useChainOption';
import { useModal } from '../hooks/useModal';

const h1Style = 'font-bold text-[24px]';
const sectionStyle = 'my-[20px] flex flex-col gap-[10px]';

export default function MainPage() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
  const sliderRef = useRef<null | Slider>(null);
  const { needToLoginAlarm } = useAlarm();
  const { isModalOpen, closeModal } = useModal();
  const { primaryOption, secondaryOptions, selectedOption, handleChangeOption, handleChangeSecondaryButton } =
    useChainOption();

  const { data: popularPlaces } = useQuery({
    queryKey: ['popular places'],
    queryFn: () => getPopularPlaces(),
    staleTime: 600000, // 데이터가 10분 동안 신선
    refetchInterval: 600000, // 데이터를 다시 불러오는 간격
    refetchOnWindowFocus: false, // 다른 창을 봤다가 다시 현재 브라우저에 포커스 했을 때 리페칭을 막음
  });

  const { data: places, isSuccess } = useQuery({
    queryKey: ['places', selectedOption],
    queryFn: () => getPlaces(`${primaryOption} ${selectedOption}`),
    staleTime: 600000, // 데이터가 10분 동안 신선
    refetchInterval: 600000, // 데이터를 다시 불러오는 간격
    refetchOnWindowFocus: false, // 다른 창을 봤다가 다시 현재 브라우저에 포커스 했을 때 리페칭을 막음
  });

  if (isSuccess && places && places.length >= 1 && !isDataLoaded) {
    setIsDataLoaded(true);
  }

  const playSlider = () => {
    if (sliderRef.current) sliderRef.current.slickPlay();
    setIsPlaying(true);
  };
  const pauseSlider = () => {
    if (sliderRef.current) sliderRef.current.slickPause();
    setIsPlaying(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  // 이 부분 커스텀 훅으로 만들기!!
  useEffect(() => {
    const modal = document.getElementById('modal-by-hj');
    const modalContent = document.getElementById('modal-content');

    const handleOverlayClick = (e: MouseEvent) => {
      if (modal && !modalContent?.contains(e.target as Node)) closeModal();
    };

    if (isModalOpen) {
      modal?.addEventListener('click', handleOverlayClick);
    }

    return () => {
      modal?.removeEventListener('click', handleOverlayClick);
    };
  }, [isModalOpen, closeModal]);

  return (
    <>
      <section className={sectionStyle}>
        <h1 className={h1Style}>최근 인기 여행지</h1>
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px] bg-white">
          <Slider ref={sliderRef} {...settings}>
            {popularPlaces ? (
              popularPlaces.map((place) => (
                <div className="flex justify-end">
                  <SpotCard
                    key={place.name}
                    imgPath={place?.photos[0] || ''}
                    spotName={place.name}
                    spotAddress={place.formatted_address!}
                    spotDescription={place.description}
                    needToLoginAlarm={needToLoginAlarm}
                  />
                </div>
              ))
            ) : (
              <></>
            )}
          </Slider>
          <div className="mt-[30px] flex gap-[5px] justify-center">
            {isPlaying ? (
              <button onClick={pauseSlider}>
                <img src="/pause-button.svg" alt="pause" />
              </button>
            ) : (
              <button onClick={playSlider}>
                <img src="/play-button.svg" alt="play" />
              </button>
            )}
          </div>
        </div>
      </section>
      <section className={sectionStyle}>
        <h1 className={h1Style}>여행지 찾기</h1>
        <div className="flex justify-center">
          <PlaceInput
            searchObj="여행지를"
            handleChangeRegion={handleChangeSecondaryButton}
            handleChangeCountry={handleChangeOption}
          />
        </div>
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px]">
          {/* <FilterButtonFormat /> */}
          <nav className="flex flex-col gap-y-[20px] mb-[30px]">
            <div className="flex flex-wrap gap-[8px]">
              {Object.keys(CITY_OPTIONS).map((option) => (
                <FilterButton
                  key={option}
                  buttonName={option}
                  selectedOption={primaryOption}
                  onClick={() => handleChangeSecondaryButton(option)}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-[8px]">
              {secondaryOptions.map((option) => (
                <FilterButton
                  key={option}
                  buttonName={option}
                  selectedOption={selectedOption}
                  onClick={handleChangeOption}
                />
              ))}
            </div>
          </nav>
          <div className="flex flex-wrap justify-center gap-x-[39px] gap-y-[20px]">
            {places ? (
              places.map((place) => (
                <SpotCard
                  key={place.name}
                  imgPath={place?.photos[0] || ''}
                  spotName={place.name}
                  spotAddress={place.formatted_address!}
                  spotDescription={place.description}
                  needToLoginAlarm={needToLoginAlarm}
                />
              ))
            ) : (
              <DataLoading />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
