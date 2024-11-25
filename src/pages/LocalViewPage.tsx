import { useEffect, useState } from 'react';
import { getLocationDetails } from '../api/place.api';
import { getPlaceSearchResult } from '../api/search.api';
import LocalCard from '../components/card/LocalCard';
import FilterButton from '../components/common/FilterButton';
import PlaceInput from '../components/input/PlaceInput';
import { REGION_BACKGROUNDS } from '../constants/backgrounds';
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

  const [descriptions, setDescriptions] = useState<{ [key: string]: string }>({});
  const [photos, setPhotos] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (!primaryOption || !selectedOption) return;

    const locations: string[] = LOCAL_CITY_OPTIONS[primaryOption][selectedOption];

    // 데이터를 하나씩 가져오며 업데이트
    locations.forEach(async (location) => {
      const data = await getLocationDetails(location.trim(), selectedOption, primaryOption);
      setDescriptions((prev) => ({ ...prev, [location]: data?.summary || '정보 없음' }));
      setPhotos((prev) => ({ ...prev, [location]: data?.imageUrl || '/images/default.jpg' }));
    });
  }, [primaryOption, selectedOption]);

  const backgroundImg = REGION_BACKGROUNDS[primaryOption];

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

  useEffect(() => {
    async function fetchPlaceSearchResult() {
      await getPlaceSearchResult();
    }
    fetchPlaceSearchResult();
  }, []);

  return (
    <>
      <section
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="absolute top-0 left-0 w-full h-[400px] bg-cover bg-center flex justify-center items-center"
      >
        <PlaceInput
          searchObj="원하는 여행 지역을"
          handleChangeRegion={handleChangeSecondaryButton}
          handleChangeCountry={handleChangeOption}
        />
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
          <div className="flex flex-wrap justify-start gap-x-[39px] gap-y-[20px]">
            {LOCAL_CITY_OPTIONS[primaryOption][selectedOption].map((location) => (
              <LocalCard
                key={location}
                imgPath={photos[location] || '/images/default.jpg'}
                localName={location}
                localDescription={descriptions[location] || '로딩 중...'}
                needToLoginAlarm={needToLoginAlarm}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
