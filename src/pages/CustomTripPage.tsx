import { useState } from 'react';
import FilterButton from '../components/common/FilterButton';
import { FirstQuestion } from '../components/modal/SurveyModal';
import { hideOverlay, showOverlay } from '../utils/toggleOverlay';

export default function CustomTripPage() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    showOverlay();
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    hideOverlay();
    setOpenModal(false);
  };

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
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px] ">
          <nav className="flex flex-wrap gap-[8px] mb-[20px]">
            <FilterButton buttonName="힐링, 휴식" />
            <FilterButton buttonName="역사 공부, 문화 탐방" />
            <FilterButton buttonName="자연/경치 관람" />
            <FilterButton buttonName="액티비티, 모험" />
            <FilterButton buttonName="미식 여행, 맛집 탐방" />
            <FilterButton buttonName="사진 촬영, 인생샷" />
            <FilterButton buttonName="쇼핑, 도심 탐방" />
            <FilterButton buttonName="호캉스" />
          </nav>
        </div>
      </section>
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <FirstQuestion />
        </div>
      )}
    </>
  );
}
