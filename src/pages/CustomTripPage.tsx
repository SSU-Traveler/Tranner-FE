import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { getPlacesBasedOnTheme } from '../api/place.api';
import SpotCard from '../components/card/SpotCard';
import DataLoading from '../components/common/DataLoading';
import FilterButton from '../components/common/FilterButton';
import FirstQuestion from '../components/modal/survey/FirstQuestion';
import { CITY_INDICATORS } from '../constants/indicators';
import { THEME_OPTIONS } from '../constants/options';
import { useAlarm } from '../hooks/useAlarm';
import { useModal } from '../hooks/useModal';
import { useOption } from '../hooks/useOption';
import { SummaryOfPlaceInfo } from '../types/place.type';
import useLoginStore from '../zustand/loginStore';

export default function CustomTripPage() {
  const { isLoggedIn } = useLoginStore();
  const { isModalOpen, openModal, closeModal } = useModal();
  const { needToLoginAlarm } = useAlarm();

  // useChainOption
  const [primaryOption, setPrimaryOption] = useState<string>(Object.keys(THEME_OPTIONS)[0]);

  const arrayOnlyKorname = THEME_OPTIONS[primaryOption].map((item) => item.korName);

  const [secondaryOptions, setSecondaryOptions] = useState<string[]>(arrayOnlyKorname);
  const { selectedOption, setSelectedOption, handleChangeOption } = useOption(arrayOnlyKorname);

  const handleChangeSecondaryButton = (option: string) => {
    setPrimaryOption(option);
    const arrayOnlyKorname = THEME_OPTIONS[option].map((item) => item.korName);
    setSecondaryOptions(arrayOnlyKorname);
    setSelectedOption(arrayOnlyKorname[0]);
  };

  const handleOpenModal = () => {
    if (!isLoggedIn) needToLoginAlarm();
    else openModal(<FirstQuestion />);
  };

  const { ref } = useInView({
    threshold: 1,
    onChange: (inView) => {
      if (inView && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    },
  });

  // 1. queryFn() 함수는 서버에서 데이터를 요청하고 그 데이터를 useInfiniteQuery에 전달함
  // 2. queryFn() 함수의 리턴값은 getNextPageParam의 lastPage로 전달됨
  // 3. getNextPageParam() 함수는 lastPage의 데이터를 기반으로 다음 페이지를 요청할 pageParam을 계산함
  // 4. getNextPageParam() 함수의 리턴값은 fetchNextPage() 함수가 다음 페이지를 요청할 때 pageParam으로 전달됨
  // 5. fetchNextPage() 함수는 이 값을 다시 queryFn에 전달하여 새로운 데이터를 가져옴
  const NUMBER_OF_CITY = CITY_INDICATORS.length;

  const {
    data: places,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<
    { placesWithDetails: SummaryOfPlaceInfo[]; nextPageToken: string | null },
    Error,
    SummaryOfPlaceInfo[],
    string[],
    { token: string | null; city: number }
  >({
    queryKey: ['theme places', primaryOption, selectedOption],
    initialPageParam: { token: null, city: 0 },
    queryFn: async ({ pageParam }) => {
      const { korName, engName } = THEME_OPTIONS[primaryOption].filter(
        (option) => option.korName === selectedOption
      )[0];
      const lat = CITY_INDICATORS[pageParam.city].lat;
      const lng = CITY_INDICATORS[pageParam.city].lng;
      return await getPlacesBasedOnTheme(korName, engName, lat, lng, pageParam.token);
    },
    getNextPageParam: (lastPage, _, lastPageParam) => {
      let cityNum: number = lastPageParam.city;
      cityNum = lastPageParam.token === null ? ++cityNum : cityNum;
      if (cityNum >= NUMBER_OF_CITY) return null;
      return { token: lastPage.nextPageToken || null, city: cityNum };
    },
    select: ({ pages }) => pages.flatMap((page) => page.placesWithDetails),
    staleTime: 600000,
  });

  useEffect(() => {
    const modal = document.getElementById('modal-by-hj');
    const modalContent = document.getElementById('modal-content');

    const handleOverlayClick = (e: MouseEvent) => {
      if (modal && modalContent && !modalContent?.contains(e.target as Node)) closeModal();
    };

    if (isModalOpen) {
      modal?.addEventListener('click', handleOverlayClick);
    }

    return () => {
      modal?.removeEventListener('click', handleOverlayClick);
    };
  }, [isModalOpen, closeModal]);

  useEffect(() => {
    localStorage.removeItem('survey_first');
    localStorage.removeItem('survey_second');
    localStorage.removeItem('survey_third');
    localStorage.removeItem('lat');
    localStorage.removeItem('lng');
    localStorage.removeItem('type');
  }, []);

  return (
    <>
      <section
        style={{ backgroundImage: `url("images/theme/history-study.jpg")` }}
        className="relative top-0 left-0 w-full h-[400px] bg-cover bg-center flex items-center"
      >
        <div className="absolute w-full h-full bg-black opacity-40"></div>
        <div className="relative z-10 text-white pl-[120px]">
          <p className="font-bold text-[50px] mb-[20px]">당신의 꿈의 여행을 찾아드립니다!</p>
          <div className="mb-[20px] text-[17px]">
            <p>맞춤형 여행지 추천 서비스에서 3가지 간단한 질문에 답해주세요.</p>
            <p>휴식과 힐링, 관광, 쇼핑 등 원하는 테마에 맞는 최적의 여행지를 추천해 드립니다.</p>
            <p>지금 시작해 보세요!</p>
          </div>
          <button onClick={handleOpenModal} className="hover:font-bold text-[28px] hover:cursor-pointer">
            맞춤 여행지 찾기 {'〉'}
          </button>
        </div>
      </section>
      <section className="my-[20px] px-[120px]">
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px] bg-white">
          <nav className="flex flex-col gap-y-[20px] mb-[20px]">
            <div className="flex flex-wrap gap-[8px]">
              {Object.keys(THEME_OPTIONS).map((option) => (
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
          <div className="flex flex-wrap justify-start gap-x-[21.9px] gap-y-[20px]">
            {places && places.length > 0 ? (
              places.map((place, index) => (
                <SpotCard
                  key={`${place.name}${index}`}
                  imgPath={place.photos[0] || '/images/default.jpg'}
                  spotName={place.name!}
                  spotAddress={place?.formatted_address || ''}
                  spotDescription={place.description}
                  needToLoginAlarm={needToLoginAlarm}
                />
              ))
            ) : (
              <DataLoading />
            )}
          </div>
          {hasNextPage && (
            <div ref={ref}>
              <DataLoading />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
