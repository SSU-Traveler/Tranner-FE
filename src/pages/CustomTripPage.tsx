import { useEffect, useState } from 'react';
import { getPlacesBasedOnTheme } from '../api/place.api';
import SpotCard from '../components/card/SpotCard';
import DataLoading from '../components/common/DataLoading';
import FilterButton from '../components/common/FilterButton';
import FirstQuestion from '../components/modal/survey/FirstQuestion';
import { THEME_OPTIONS } from '../constants/options';
import { useAlarm } from '../hooks/useAlarm';
import { useModal } from '../hooks/useModal';
import { useOption } from '../hooks/useOption';

export default function CustomTripPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true); // notiflix 테스트용
  const [theme, setTheme] = useState<string>('');
  const [places, setPlaces] = useState([]);
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
    if (!isLogin) needToLoginAlarm();
    else openModal(<FirstQuestion />);
  };

  // const {data: themePlaces} = useQuery({
  //   queryKey: ["theme places"]
  // })

  useEffect(() => {
    async function fetchPlacesBasedOnTheme() {
      const themeStr = THEME_OPTIONS[primaryOption].filter((option) => option.korName === selectedOption)[0].engName;
      setTheme(themeStr);
      const result = await getPlacesBasedOnTheme(selectedOption);
      console.log('result: ', result);
      setPlaces(result);
    }
    fetchPlacesBasedOnTheme();
  }, [primaryOption, selectedOption]);

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
    localStorage.removeItem('types');
  }, []);

  return (
    <>
      <section
        style={{ backgroundImage: `url("images/theme/history-study.jpg")` }}
        className="absolute top-0 left-0 w-full h-[400px] bg-cover bg-center flex items-center"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
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
      <section className="absolute mt-[420px] pr-[120px] lg:w-[1568px]">
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
          <div className="flex flex-wrap justify-center gap-x-[39px] gap-y-[20px]">
            {places.length > 0 && places[0] ? (
              places.map((place) => (
                <SpotCard
                  key={place.name}
                  imgPath={place.photos[0]}
                  spotName={place.name}
                  spotAddress={place?.formatted_address}
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
