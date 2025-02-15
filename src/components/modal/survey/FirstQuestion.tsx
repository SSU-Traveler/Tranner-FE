import clsx from 'clsx';
import { useState } from 'react';
import { COUNTRY_OPTIONS, CountryOptionsType } from '../../../constants/options';
import { useModal } from '../../../hooks/useModal';
import SecondQuestion from './SecondQuestion';

export default function FirstQuestion() {
  const [selectedOption, setSelectedOption] = useState<null | string>(localStorage.getItem('survey_first') || null);
  const { openModal, closeModal } = useModal();

  const handleCloseModal = () => {
    localStorage.removeItem('survey_first');
    localStorage.removeItem('survey_second');
    localStorage.removeItem('survey_third');
    localStorage.removeItem('lat');
    localStorage.removeItem('lng');
    localStorage.removeItem('type');
    closeModal();
  };

  const handleClickOption = (option: CountryOptionsType) => {
    localStorage.setItem('survey_first', String(option.name));
    localStorage.setItem('lat', String(option.lat));
    localStorage.setItem('lng', String(option.lng));
    setSelectedOption(String(option.name));
  };

  const handleMoveNextQuestion = () => {
    openModal(<SecondQuestion />);
  };

  return (
    <div className="relative bg-[#EDE8E8] rounded-[10px] w-[460px] h-[650px] p-[20px]">
      <img
        src="/close-button.svg"
        alt="close"
        className="absolute w-[12px] h-[12px] hover:cursor-pointer right-[20px]"
        onClick={handleCloseModal}
      />
      <h1 className="font-bold text-[20px] text-center mt-[20px]">Q1. 어떤 지역으로 여행을 가고 싶나요?</h1>
      <section className="h-[505px]">
        <div className="flex flex-wrap gap-x-[15px] gap-y-[20px] mt-[30px] px-[40px] justify-center items-start">
          {COUNTRY_OPTIONS.map((option) => (
            <div
              key={option.name}
              className={clsx(
                'rounded-[5px] h-[50px] place-content-center text-center hover:bg-[#B2B9C0] hover:cursor-pointer',
                'w-[160px]',
                selectedOption === option.name ? 'bg-[#B2B9C0]' : 'bg-white'
              )}
              onClick={() => handleClickOption(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      </section>
      <div className="relative mt-[15px] flex justify-center items-center gap-[5px]">
        <img src="/selected-ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
        <img src="/ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
        <img src="/ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
        {selectedOption && (
          <img
            src="/next-arrow.svg"
            alt="다음 페이지 이동"
            className="absolute right-0 w-[20px] h-[20px] hover:cursor-pointer"
            onClick={handleMoveNextQuestion}
          />
        )}
      </div>
    </div>
  );
}
