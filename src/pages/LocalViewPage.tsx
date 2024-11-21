import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { getLocationDetails } from '../api/place.api';
import LocalCard from '../components/card/LocalCard';
import Basket from '../components/common/Basket';
import FilterButton from '../components/common/FilterButton';
import PlaceInput from '../components/input/PlaceInput';
import { LOCAL_CITY_OPTIONS } from '../constants/districts';
import { CITY_OPTIONS } from '../constants/options';
import { useAlarm } from '../hooks/useAlarm';
import { useChainOption } from '../hooks/useChainOption';
import { useModal } from '../hooks/useModal';

export default function LocalViewPage() {
  const { needToLoginAlarm } = useAlarm();
  const { isModalOpen, closeModal } = useModal();
  const { primaryOption, secondaryOptions, selectedOption, handleChangeOption, handleChangeSecondaryButton } =
    useChainOption();

  console.log(primaryOption);
  console.log(secondaryOptions);

  const useFetchLocationDetails = (primaryOption: string, selectedOption: string) => {
    return useQuery({
      queryKey: ['location details', primaryOption, selectedOption],
      queryFn: async () => {
        const newDescriptions: { [key: string]: string } = {};
        const newPhotos: { [key: string]: string } = {};

        // 지역 목록 순회
        for (const location of LOCAL_CITY_OPTIONS[primaryOption][selectedOption]) {
          const data = await getLocationDetails(location.trim(), selectedOption, primaryOption);

          newDescriptions[location] = data.summary || '정보 없음';
          newPhotos[location] = data.imageUrl || '/images/default-placeholder.jpg';
        }

        return { descriptions: newDescriptions, photos: newPhotos };
      },
      enabled: !!selectedOption,
      staleTime: 600000, // 데이터가 10분 동안 신선
      refetchInterval: 600000, // 데이터를 다시 불러오는 간격
      refetchOnWindowFocus: false, // 다른 창을 봤다가 다시 현재 브라우저에 포커스 했을 때 리페칭을 막음
    });
  };

  const { data: locationDetails } = useFetchLocationDetails(primaryOption, selectedOption);

  const { descriptions, photos } = locationDetails || { descriptions: {}, photos: {} };

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
      <section
        style={{ backgroundImage: `url("images/place/seoul-lotte-world-tower.jpg")` }}
        className="absolute top-0 left-0 w-full h-[400px] bg-cover bg-center flex justify-center items-center"
      >
        <PlaceInput searchObj="원하는 여행 지역을" />
      </section>

      <section className="absolute mt-[420px] pr-[120px]">
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px] bg-white">
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
          <Basket />
          <div className="flex flex-wrap justify-start gap-x-[39px] gap-y-[20px]">
            {LOCAL_CITY_OPTIONS[primaryOption][selectedOption].map((location) => (
              <LocalCard
                key={location}
                imgPath={photos[location] || '/images/default-placeholder.jpg'}
                localName={location}
                localDescription={descriptions[location]}
                needToLoginAlarm={needToLoginAlarm}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
