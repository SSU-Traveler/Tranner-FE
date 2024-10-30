import clsx from 'clsx';
import { useState } from 'react';
import { COUNTRY_OPTIONS, THEME_OPTIONS } from '../../constants/options';
import { useModal } from '../../hooks/useModal';

const optionStyle = 'rounded-[5px] h-[50px] place-content-center text-center hover:bg-[#B2B9C0] hover:cursor-pointer';

export function FirstQuestion() {
  const [selectedOption, setSelectedOption] = useState<null | string>(null);
  const { closeModal } = useModal();

  const handleClickOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-[#EDE8E8] rounded-[10px] w-[460px] h-[650px] p-[20px]">
      <img
        src="/close-button.svg"
        alt="close"
        className="w-[12px] h-[12px] hover:cursor-pointer ml-[410px] mb-[10px]"
        onClick={closeModal}
      />
      <h1 className="font-bold text-[20px] text-center">Q1. 어떤 목적으로 여행을 하고 싶나요?</h1>
      <section className="flex flex-col gap-[15px] mt-[30px] px-[40px]">
        {THEME_OPTIONS.map((option) => (
          <div
            key={option}
            className={clsx(optionStyle, selectedOption === option ? 'bg-[#B2B9C0]' : 'bg-white')}
            onClick={() => handleClickOption(option)}
          >
            {option}
          </div>
        ))}
      </section>
      <div className="mt-[15px] flex justify-center gap-[5px]">
        <img src="/public/ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
        <img src="/public/ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
        <img src="/public/ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
      </div>
    </div>
  );
}

// 첫 번째 선택지에 따라서 두 번째 질문(세부 질문)은 달라짐

export function ThirdQuestion() {
  return (
    <div className="bg-[#EDE8E8] rounded-[10px] w-[460px] h-[650px] p-[20px]">
      <h1 className="font-bold text-[20px] text-center">Q3. 어떤 지역으로 여행을 가고 싶나요?</h1>
      <section className="flex flex-wrap gap-x-[15px] gap-y-[20px] mt-[30px] px-[40px] justify-center">
        {COUNTRY_OPTIONS.map((option) => (
          <div key={option} className={clsx(optionStyle, 'w-[160px]')}>
            {option}
          </div>
        ))}
      </section>
    </div>
  );
}
