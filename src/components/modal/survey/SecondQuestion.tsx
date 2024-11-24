import clsx from 'clsx';
import { useState } from 'react';
import { THEME_OPTIONS } from '../../../constants/options';
import { useModal } from '../../../hooks/useModal';
import FirstQuestion from './FirstQuestion';
import ThirdQuestion from './ThirdQuestion';

export default function SecondQuestion() {
  const [selectedOption, setSelectedOption] = useState<null | string>(localStorage.getItem('survey_second') || null);
  const { openModal, closeModal } = useModal();

  const handleCloseModal = () => {
    localStorage.removeItem('survey_first');
    localStorage.removeItem('survey_second');
    localStorage.removeItem('survey_third');
    localStorage.removeItem('lat');
    localStorage.removeItem('lng');
    localStorage.removeItem('type');
    localStorage.removeItem('types');
    closeModal();
  };

  const handleClickOption = (option: string) => {
    localStorage.setItem('survey_second', option);
    setSelectedOption(option);
  };

  const handleMovePastQuestion = () => {
    openModal(<FirstQuestion />);
  };

  const handleMoveNextQuestion = (option: string) => {
    openModal(<ThirdQuestion themeOption={option} />);
  };

  return (
    <div className="relative bg-[#EDE8E8] rounded-[10px] w-[460px] h-[650px] p-[20px]">
      <img
        src="/close-button.svg"
        alt="close"
        className="absolute w-[12px] h-[12px] hover:cursor-pointer right-[20px]"
        onClick={handleCloseModal}
      />
      <h1 className="font-bold text-[20px] text-center mt-[20px]">Q2. 어떤 목적으로 여행을 하고 싶나요?</h1>
      <section className="flex flex-col gap-[15px] mt-[30px] px-[40px]">
        {Object.keys(THEME_OPTIONS).map((option) => (
          <div
            key={option}
            className={clsx(
              'rounded-[5px] h-[50px] place-content-center text-center hover:bg-[#B2B9C0] hover:cursor-pointer',
              selectedOption === option ? 'bg-[#B2B9C0]' : 'bg-white'
            )}
            onClick={() => handleClickOption(option)}
          >
            {option}
          </div>
        ))}
      </section>
      <div className="relative mt-[15px] flex justify-center items-center gap-[5px]">
        <img
          src="/prev-arrow.svg"
          alt="이전 페이지 이동"
          className="absolute left-0 w-[20px] h-[20px] hover:cursor-pointer"
          onClick={handleMovePastQuestion}
        />
        <img src="/ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
        <img src="/selected-ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
        <img src="/ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
        {selectedOption && (
          <img
            src="/next-arrow.svg"
            alt="다음 페이지 이동"
            className="absolute right-0 w-[20px] h-[20px] hover:cursor-pointer"
            onClick={() => handleMoveNextQuestion(selectedOption)}
          />
        )}
      </div>
    </div>
  );
}
