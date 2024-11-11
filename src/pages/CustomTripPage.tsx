import { useEffect, useState } from 'react';
import { getHealingPlaces } from '../api/place.api';
import SpotCard from '../components/card/SpotCard';
import FilterButton from '../components/common/FilterButton';
import { FirstQuestion } from '../components/modal/SurveyModal';
import { THEME_OPTIONS } from '../constants/options';
import { useAlarm } from '../hooks/useAlarm';
import { useModal } from '../hooks/useModal';
import { useOption } from '../hooks/useOption';

export default function CustomTripPage() {
  const [isLogin, setIsLogin] = useState<boolean>(true); // notiflix 테스트용
  const [places, setPlaces] = useState([]);
  const { isModalOpen, openModal, closeModal } = useModal();
  const { needToLoginAlarm } = useAlarm();
  const { selectedOption, handleChangeOption } = useOption(THEME_OPTIONS);

  const handleOpenModal = () => {
    if (!isLogin) needToLoginAlarm();
    else openModal(<FirstQuestion />);
  };

  useEffect(() => {
    async function fetchHealingPlaces() {
      const result = await getHealingPlaces();
      setPlaces(result);
    }
    fetchHealingPlaces();
  }, []);

  console.log(places);

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
        style={{ backgroundImage: `url("images/theme/history-study.jpg")` }}
        className="absolute top-0 left-0 w-[100vw] h-[400px] bg-cover bg-center flex items-center"
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-white pl-[120px]">
          <p className="font-bold text-[45px] mb-[20px]">당신의 꿈의 여행을 찾아드립니다!</p>
          <div className="mb-[20px]">
            <p>맞춤형 여행지 추천 서비스에서 3가지 간단한 질문에 답해주세요.</p>
            <p>휴식과 힐링, 관광, 쇼핑 등 원하는 테마에 맞는 최적의 여행지를 추천해 드립니다.</p>
            <p>지금 시작해 보세요!</p>
          </div>
          <button onClick={handleOpenModal} className="hover:font-bold text-[25px] hover:cursor-pointer">
            맞춤 여행지 찾기 {'〉'}
          </button>
        </div>
      </section>
      <section className="absolute mt-[420px]">
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px] bg-white">
          <nav className="flex flex-wrap gap-[8px] mb-[20px]">
            {THEME_OPTIONS.map((option) => (
              <FilterButton
                key={option}
                buttonName={option}
                selectedOption={selectedOption}
                onClick={handleChangeOption}
              />
            ))}
          </nav>
          <div className="flex flex-wrap justify-between gap-[20px]">
            {places.length > 0 ? (
              places.map((place, index) => (
                <SpotCard
                  key={index}
                  imgPath={place?.photos[0]}
                  spotName={place?.name}
                  spotDescription="설명"
                  spotAddress={place?.formatted_address}
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
