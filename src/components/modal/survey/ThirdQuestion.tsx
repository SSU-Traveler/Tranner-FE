import clsx from 'clsx';
import { useState } from 'react';
import { QUESTION_BASED_ON_OPTIONS } from '../../../constants/options';
import { useModal } from '../../../hooks/useModal';
import Result from './Result';
import SecondQuestion from './SecondQuestion';

const optionStyle = 'rounded-[5px] h-[50px] place-content-center text-center hover:bg-[#B2B9C0] hover:cursor-pointer';

export default function ThirdQuestion({ themeOption }: { themeOption: string }) {
  const [selectedOption, setSelectedOption] = useState<null | string>(localStorage.getItem('survey_third') || null);
  const { openModal, closeModal } = useModal();

  const question = QUESTION_BASED_ON_OPTIONS[themeOption].question;
  const optionContents = Object.entries(QUESTION_BASED_ON_OPTIONS[themeOption])
    .filter(([key]) => key !== 'question')
    .reduce<Record<string, string | string[]>>((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  const handleCloseModal = () => {
    localStorage.removeItem('survey_first');
    localStorage.removeItem('survey_second');
    localStorage.removeItem('survey_third');
    localStorage.removeItem('lat');
    localStorage.removeItem('lng');
    localStorage.removeItem('type');
    closeModal();
  };

  const handleClickOption = (key: string, value: string | string[]) => {
    localStorage.setItem('survey_third', key);
    localStorage.setItem('type', JSON.stringify(value));
    setSelectedOption(key);
  };

  const handleMovePastQuestion = () => {
    openModal(<SecondQuestion />);
  };

  const handleMoveResultScreen = () => {
    openModal(<Result />);
  };

  return (
    <div className="relative bg-[#EDE8E8] rounded-[10px] w-[460px] h-[650px] p-[20px]">
      <img
        src="/close-button.svg"
        alt="close"
        className="absolute w-[12px] h-[12px] hover:cursor-pointer right-[20px]"
        onClick={handleCloseModal}
      />
      <h1 className="font-bold text-center text-[20px] mt-[20px]">Q3. {question}</h1>
      <section className="h-[505px]">
        <div className="flex flex-col gap-[15px] mt-[30px] px-[40px]">
          {Object.entries(optionContents).map(([key, value]) => (
            <div
              key={key}
              className={clsx(optionStyle, selectedOption === key ? 'bg-[#B2B9C0]' : 'bg-white')}
              onClick={() => handleClickOption(key, value)}
            >
              {key}
            </div>
          ))}
        </div>
      </section>
      <div className="relative mt-[15px] flex justify-center items-center gap-[5px]">
        <img
          src="/prev-arrow.svg"
          alt="이전 페이지 이동"
          className="absolute left-0 w-[20px] h-[20px] hover:cursor-pointer"
          onClick={handleMovePastQuestion}
        />
        <img src="/ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
        <img src="/ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
        <img src="/selected-ellipse.svg" alt="질문 페이지 구분" className="w-[10px] h-[10px]" />
        {selectedOption && (
          <img
            src="/next-arrow.svg"
            alt="다음 페이지 이동"
            className="absolute right-0 w-[20px] h-[20px] hover:cursor-pointer"
            onClick={handleMoveResultScreen}
          />
        )}
      </div>
    </div>
  );
}
