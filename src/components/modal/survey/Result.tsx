import { useQuery } from '@tanstack/react-query';
import { getRecommendPlaces } from '../../../api/place.api';
import { useModal } from '../../../hooks/useModal';
import SurveyResultCard from '../../card/SurveyResultCard';

export default function Result() {
  const { closeModal } = useModal();

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

  const lat = localStorage.getItem('lat') || 0;
  const lng = localStorage.getItem('lng') || 0;
  const type = localStorage.getItem('type') || localStorage.getItem('types') || 'no value';

  const { data: recommendPlaces } = useQuery({
    queryKey: ['recommend places'],
    queryFn: () => getRecommendPlaces(+lat, +lng, type),
    staleTime: 600000, // 데이터가 10분 동안 신선
    refetchInterval: 600000, // 데이터를 다시 불러오는 간격
    refetchOnWindowFocus: false, // 다른 창을 봤다가 다시 현재 브라우저에 포커스 했을 때 리페칭을 막음
  });

  console.log(recommendPlaces);

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
        {/* <SpotCard
          imgPath="/images/place/경기.jpg"
          spotName="수원 화성"
          spotAddress="주소"
          spotDescription="설명"
          needToLoginAlarm={needToLoginAlarm}
        /> */}
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
