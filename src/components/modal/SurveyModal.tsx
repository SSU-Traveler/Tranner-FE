import clsx from 'clsx';

const optionStyle =
  'bg-white rounded-[5px] h-[50px] place-content-center text-center hover:bg-[#B2B9C0] hover:cursor-pointer';

export function FirstQuestion() {
  return (
    <div className="bg-[#EDE8E8] rounded-[10px] w-[460px] h-[650px] p-[20px]">
      <img src="/public/close-button.svg" alt="close" className="w-[15px] h-[15px]" />
      <h1 className="font-bold text-[20px] text-center">Q1. 어떤 목적으로 여행을 하고 싶나요?</h1>
      <section className="flex flex-col gap-[15px] mt-[30px] px-[40px]">
        <div className={optionStyle}>힐링, 휴식</div>
        <div className={optionStyle}>역사 공부, 문화 탐방</div>
        <div className={optionStyle}>자연/경치 관람</div>
        <div className={optionStyle}>액티비티, 모험</div>
        <div className={optionStyle}>미식 여행, 맛집 탐방</div>
        <div className={optionStyle}>사진 촬영, 인생샷 명소</div>
        <div className={optionStyle}>쇼핑, 도심 탐방</div>
        <div className={optionStyle}>호캉스</div>
      </section>
    </div>
  );
}

// 첫 번째 선택지에 따라서 두 번째 질문(세부 질문)은 달라짐

export function ThirdQuestion() {
  return (
    <div className="bg-[#EDE8E8] rounded-[10px] w-[460px] h-[650px] p-[20px]">
      <h1 className="font-bold text-[20px] text-center">Q3. 어떤 지역으로 여행을 가고 싶나요?</h1>
      <section className="flex flex-wrap gap-x-[15px] gap-y-[20px] mt-[30px] px-[40px] justify-center">
        <div className={clsx(optionStyle, 'w-[160px]')}>서울</div>
        <div className={clsx(optionStyle, 'w-[160px]')}>경기, 인천</div>
        <div className={clsx(optionStyle, 'w-[160px]')}>강원도</div>
        <div className={clsx(optionStyle, 'w-[160px]')}>대전</div>
        <div className={clsx(optionStyle, 'w-[160px]')}>대구</div>
        <div className={clsx(optionStyle, 'w-[160px]')}>충청도</div>
        <div className={clsx(optionStyle, 'w-[160px]')}>전라도</div>
        <div className={clsx(optionStyle, 'w-[160px]')}>부산</div>
        <div className={clsx(optionStyle, 'w-[160px]')}>경상도</div>
        <div className={clsx(optionStyle, 'w-[160px]')}>제주도</div>
      </section>
    </div>
  );
}
