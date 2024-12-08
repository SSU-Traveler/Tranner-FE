import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { getPlaces, getPlacesMore } from '../api/place.api';
import { CustomNextArrow, CustomPrevArrow } from '../components/arrow/CustomArrow';
import SpotCard from '../components/card/SpotCard';
import DataLoading from '../components/common/DataLoading';
import FilterButton from '../components/common/FilterButton';
import PlaceInput from '../components/input/PlaceInput';
import { CITY_OPTIONS } from '../constants/options';
import { useAlarm } from '../hooks/useAlarm';
import { useChainOption } from '../hooks/useChainOption';
import { useModal } from '../hooks/useModal';
import { SummaryOfPlaceInfo } from '../types/place.type';
import useBasketStore from '../zustand/basketStore';
import Basket from '../components/common/Basket';
import { basketType } from '../types/basket.type';

const h1Style = 'font-bold text-[24px]';
const sectionStyle = 'my-[20px] flex flex-col gap-[10px]';

// // 수동 캐싱
// const placesCache = new Map<string, SummaryOfPlaceInfo[]>();

// const CACHE_TIMEOUT = 10 * 60 * 1000; // 10분

export default function MainPage() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const sliderRef = useRef<null | Slider>(null);
  const { needToLoginAlarm } = useAlarm();
  const { isModalOpen, closeModal } = useModal();
  const { primaryOption, secondaryOptions, selectedOption, handleChangeOption, handleChangeSecondaryButton } =
    useChainOption();

  // 수정
  // useQuery는 데이터를 모두 받아온 뒤에 UI를 렌더링함 -> 데이터 20개를 받은 후에 장소 카드가 나와서 UI가 늦게 나옴
  // 따라서 useState, useEffect를 사용해서 하나의 데이터가 도착하면 바로 UI에 반영되도록 함
  // const [popularPlaces, setPopularPlaces] = useState<SummaryOfPlaceInfo[]>([]);
  // const [places, setPlaces] = useState<SummaryOfPlaceInfo[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // let currentAbortController: AbortController | null = null;
  // let currentRequestId = 0; // 고유 요청 ID

  // const fetchPlaces = (location: string) => {
  //   setIsLoading(true); // 로딩 시작
  //   setPlaces([]);

  //   if (location === '대한민국') {
  //     getPlaces(location, (place) => {
  //       setPopularPlaces((prevPlaces) => [...prevPlaces, place]);
  //     }).catch((err) => console.error(err));
  //   } else {
  //     // 이전 요청 중단
  //     if (currentAbortController) {
  //       currentAbortController.abort();
  //     }
  //     // 새로운 AbortController 생성
  //     currentAbortController = new AbortController();
  //     const signal = currentAbortController.signal;

  //     // 고유 요청 ID 생성
  //     const requestId = ++currentRequestId;

  //     // 캐시에서 해당 location의 데이터가 있으면 바로 사용
  //     console.log(placesCache);
  //     if (placesCache.has(location)) {
  //       if (requestId === currentRequestId) {
  //         setPlaces(placesCache.get(location)!);
  //         setIsLoading(false); // 캐시에서 데이터를 바로 사용하므로 로딩 종료
  //       }
  //       return;
  //     }
  //     // if (placesCache.has(location)) {
  //     //   const cachedData = placesCache.get(location);
  //     //   if (cachedData && (Date.now() - cachedData.timestamp < CACHE_TIMEOUT)) {
  //     //     setPlaces(cachedData.data);
  //     //     setIsLoading(false);
  //     //     return;
  //     //   }
  //     // }

  //     // 새 데이터를 받아오는 로직
  //     const tempPlaces: SummaryOfPlaceInfo[] = [];
  //     getPlaces(
  //       location,
  //       (place) => {
  //         if (requestId === currentRequestId) {
  //           setPlaces((prevPlaces) => {
  //             const isDuplicate = prevPlaces.some(
  //               (p) => p.formatted_address === place.formatted_address && p.name === place.name
  //             );
  //             if (!isDuplicate) {
  //               const updatedPlaces = [...prevPlaces, place];
  //               tempPlaces.push(place);
  //               return updatedPlaces;
  //             }
  //             return prevPlaces;
  //           });
  //         }
  //       },
  //       signal
  //     )
  //       .then(() => {
  //         if (requestId === currentRequestId) {
  //           placesCache.set(location, tempPlaces);
  //         }
  //         setIsLoading(false); // 로딩 종료
  //       })
  //       .catch((err) => {
  //         if (err.name === 'AbortError') console.log('요청 중단됨');
  //         else console.error(err);
  //         setIsLoading(false); // 오류가 발생해도 로딩 상태를 종료
  //       });
  //   }
  // };

  // const handleFetchFirstOption = (primaryOption: string) => {
  //   handleChangeSecondaryButton(primaryOption);
  //   fetchPlaces(`${primaryOption} ${selectedOption}`);
  // };

  // const handleFetchSecondOption = (primaryOption: string, secondaryOption: string) => {
  //   handleChangeOption(secondaryOption);
  //   fetchPlaces(`${primaryOption} ${secondaryOption}`);
  // };

  // useEffect(() => {
  //   fetchPlaces(`${primaryOption} ${selectedOption}`);
  //   fetchPlaces('대한민국');
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     // 컴포넌트 언마운트 시 데이터 초기화
  //     setPlaces([]);
  //     setPopularPlaces([]);
  //   };
  // }, []);

  // 여기부터
  const { data: popularPlaces } = useQuery<SummaryOfPlaceInfo[], Error, SummaryOfPlaceInfo[], string[]>({
    queryKey: ['popular places'],
    queryFn: async () => await getPlaces('대한민국'),
    staleTime: 600000, // 데이터가 10분 동안 신선
    refetchInterval: 600000, // 데이터를 다시 불러오는 간격
    refetchOnWindowFocus: false, // 다른 창을 봤다가 다시 현재 브라우저에 포커스 했을 때 리페칭을 막음
  });

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
    string | null
  >({
    queryKey: ['places', `${primaryOption} ${selectedOption}`],
    initialPageParam: null,
    queryFn: async ({ pageParam }) => await getPlacesMore(`${primaryOption} ${selectedOption}`, pageParam),
    getNextPageParam: (lastPage) => lastPage.nextPageToken,
    select: ({ pages }) => pages.flatMap((page) => page.placesWithDetails),
    staleTime: 600000, // 데이터가 10분 동안 신선
  });

  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

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

  // //사용자가 장바구니에 담은 요소들
  // const selectedSpots: basketType[] = [];
  // useEffect(() => {
  //   // 장바구니가 변경될 때마다 로컬 스토리지에서 값을 가져옴
  //   selectedSpots.push(...basket);
  // });
  //장바구니 관련
  const [selectedSpots, setSelectedSpots] = useState<basketType[]>([]);
  const { basket } = useBasketStore();

  useEffect(() => {
    setSelectedSpots(basket);
  }, [basket]); // basket이 변경될 때마다 실행

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
                    key={place.formatted_address}
                    imgPath={place?.photos[0] || '/images/default.jpg'}
                    spotName={place.name!}
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
          <Basket basketSpots={selectedSpots} />
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
                  onClick={() => handleChangeOption(option)}
                />
              ))}
            </div>
          </nav>
          <div className="flex flex-wrap justify-start gap-x-[21.9px] gap-y-[20px]">
            {places ? (
              places.map((place, index) => (
                <SpotCard
                  key={`${place.name}${index}`}
                  imgPath={place?.photos[0] || '/images/default.jpg'}
                  spotName={place.name!}
                  spotAddress={place.formatted_address!}
                  spotDescription={place.description}
                  needToLoginAlarm={needToLoginAlarm}
                />
              ))
            ) : (
              <DataLoading />
            )}
            {hasNextPage && <DataLoading />}
          </div>
        </div>
      </section>
    </>
  );
}
