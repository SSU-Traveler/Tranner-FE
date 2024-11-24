import { useModal } from '../../../hooks/useModal';
import SurveyResultCard from '../../card/SurveyResultCard';

export default function Result() {
  const { closeModal } = useModal();

  const handleCloseModal = () => {
    localStorage.removeItem('survey_first');
    localStorage.removeItem('survey_second');
    localStorage.removeItem('survey_third');
    closeModal();
  };

  return (
    <div className="relative bg-[#EDE8E8] rounded-[10px] w-[800px] h-[650px] p-[20px] overflow-y-auto scrollbar-custom">
      <img
        src="/close-button.svg"
        alt="close"
        className="absolute w-[12px] h-[12px] hover:cursor-pointer right-[20px]"
        onClick={handleCloseModal}
      />
      <h1 className="font-bold text-[20px] text-center mt-[20px]">(닉네임)님에게 추천하는 여행지</h1>
      <section className="flex flex-wrap justify-center gap-[15px] mt-[30px] px-[20px]">
        <SurveyResultCard />
        <SurveyResultCard />
        <SurveyResultCard />
        <SurveyResultCard />
        <SurveyResultCard />
        <SurveyResultCard />
        <SurveyResultCard />
        <SurveyResultCard />
        <SurveyResultCard />
        <SurveyResultCard />
        <SurveyResultCard />
        <SurveyResultCard />
      </section>
    </div>
  );
}
