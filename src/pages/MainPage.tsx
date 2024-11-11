import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { getPlaces, getPopularPlaces } from '../api/place.api';
import { CustomNextArrow, CustomPrevArrow } from '../components/arrow/CustomArrow';
import SpotCard from '../components/card/SpotCard';
import FilterButton from '../components/common/FilterButton';
import PlaceInput from '../components/input/PlaceInput';
import { CITY_OPTIONS } from '../constants/options';
import { useAlarm } from '../hooks/useAlarm';
import { useChainOption } from '../hooks/useChainOption';
import { useModal } from '../hooks/useModal';
import { SummaryOfPlaceInfo } from '../types/place.type';

const h1Style = 'font-bold text-[24px]';
const sectionStyle = 'my-[20px] flex flex-col gap-[10px]';

export default function MainPage() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [popularPlaces, setPopularPlaces] = useState<SummaryOfPlaceInfo[] | null>(null);
  const [places, setPlaces] = useState<SummaryOfPlaceInfo[] | null>(null);
  const sliderRef = useRef<null | Slider>(null);
  const { needToLoginAlarm } = useAlarm();
  const { isModalOpen, closeModal } = useModal();
  const { primaryOption, secondaryOptions, selectedOption, handleChangeOption, handleChangeSecondaryButton } =
    useChainOption();

  useEffect(() => {
    async function fetchPopularPlaces() {
      const result = await getPopularPlaces();
      setPopularPlaces(result);

      const result2 = await getPlaces(`${primaryOption} ${selectedOption}`);
      setPlaces(result2);
    }
    fetchPopularPlaces();
  }, [primaryOption, selectedOption]);

  const playSlider = () => {
    if (sliderRef.current) sliderRef.current.slickPlay();
    setIsPlaying(true);
  };
  const pauseSlider = () => {
    if (sliderRef.current) sliderRef.current.slickPause();
    setIsPlaying(false);
  };

  console.log(popularPlaces);
  console.log(places);

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
    const modal = document.getElementById('modal');
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
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px]">
          <Slider ref={sliderRef} {...settings}>
            {popularPlaces ? (
              popularPlaces.map((place) => (
                <div className="flex justify-end">
                  <SpotCard
                    key={place.name}
                    imgPath={place.photos[0]}
                    spotName={place.name}
                    spotAddress={place.formatted_address!}
                    spotDescription="설명"
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
          <PlaceInput searchObj="여행지" />
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
          <div className="flex flex-wrap justify-between gap-[20px]">
            {places ? (
              places.map((place) => (
                <SpotCard
                  key={place.name}
                  imgPath={place.photos[0]}
                  spotName={place.name}
                  spotAddress={place.formatted_address!}
                  spotDescription={place.description}
                  needToLoginAlarm={needToLoginAlarm}
                />
              ))
            ) : (
              <SpotCard
                imgPath="/images/example-lotteworld.jpg"
                spotName="롯데월드"
                spotEngName="Lotte World"
                spotAddress="서울특별시 송파구 올림픽로 240"
                spotDescription="롯데월드(영어: Lotte World)는 대한민국 서울특별시 송파구 올림픽로 240에 위치한 테마파크이다. 롯데그룹의 계열사인 호텔롯데 월드 사업부에서 운영한다.
              놀이시설은 실내의 롯데월드 어드벤처(Lotte World Adventure)와 야외의 매직아일랜드가 운영되고 있으며, 민속박물관, 아이스링크, 백화점, 마트, 호텔 등이 포함된다."
                needToLoginAlarm={needToLoginAlarm}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
