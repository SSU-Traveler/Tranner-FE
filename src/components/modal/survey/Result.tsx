import { useQuery } from '@tanstack/react-query';
import { getRecommendPlaces } from '../../../api/place.api';
import { useModal } from '../../../hooks/useModal';
import SurveyResultCard from '../../card/SurveyResultCard';
import DataLoading from '../../common/DataLoading';

export default function Result() {
  const { closeModal } = useModal();

  const handleCloseModal = () => {
    localStorage.removeItem('survey_first');
    localStorage.removeItem('survey_second');
    localStorage.removeItem('survey_third');
    localStorage.removeItem('lat');
    localStorage.removeItem('lng');
    localStorage.removeItem('type');
    closeModal();
  };

  const lat = localStorage.getItem('lat')!;
  const lng = localStorage.getItem('lng')!;
  const type = JSON.parse(localStorage.getItem('type')!);

  const { data: recommendPlaces, isFetching } = useQuery({
    queryKey: ['recommend places'],
    queryFn: async () => await getRecommendPlaces(+lat, +lng, type),
    enabled: !!localStorage.getItem('survey_third'),
    refetchOnWindowFocus: false, // 다른 창을 봤다가 다시 현재 브라우저에 포커스 했을 때 리페칭을 막음
  });

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
        {isFetching ? (
          <DataLoading />
        ) : recommendPlaces ? (
          recommendPlaces?.map((place, index) => (
            <SurveyResultCard
              key={`${place.name}${index}`}
              imgPath={place.photos[0] || '/images/default.jpg'}
              spotName={place.name!}
            />
          ))
        ) : (
          <DataLoading />
        )}
      </section>
    </div>
  );
}
