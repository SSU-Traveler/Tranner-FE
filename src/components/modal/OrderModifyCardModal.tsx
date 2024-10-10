import changeDateFormat from '../../utils/changeDateFormat';
import getDayOfWeek from '../../utils/getDayOfWeek';
import TripPlanCard from '../card/TripPlanCard';

// OrderModifyCardModal 컴포넌트가 받게 될 props
// 1. 여행 시작일
// 2. 여행 종료일
// 3.

interface OrderModifyCardModalProps {
  tripStartDate: Date;
  tripEndDate: Date;
}

export default function OrderModifyCardModal({ tripStartDate, tripEndDate }: OrderModifyCardModalProps) {
  const dayDiff: number = (tripEndDate.getTime() - tripStartDate.getTime()) / (1000 * 60 * 60 * 24);
  const formattedTripStartDate: string = changeDateFormat(tripStartDate);
  const formattedTripEndDate: string = changeDateFormat(tripEndDate);
  const startDayOfWeek = getDayOfWeek(tripStartDate); // 시작하는 요일

  return (
    <div className="w-[500px] h-[650px] bg-white rounded-[12px] flex flex-col items-center p-[30px]">
      <p className="text-[20px] font-bold mb-[20px]">드래그해서 순서를 수정하세요</p>
      <section className="w-[440px] h-[500px] overflow-y-auto overflow-x-hidden mb-[20px] flex flex-col items-center scrollbar-custom">
        <div className="w-[410px] bg-button-selected text-white text-[14px] p-[5px] rounded-[5px] flex justify-between">
          <p>1일차 일정</p>
          <p>{formattedTripStartDate} (수)</p>
        </div>
        <section className="flex flex-col gap-[5px] py-[10px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[30px] h-[30px] flex justify-center items-center bg-button-basic text-white text-[14px] font-bold rounded-[50%]">
              3
            </div>
            <TripPlanCard
              imgPath="/images/성산일출봉.jpeg"
              placeName="성산일출봉"
              placeAddress="제주 서귀포시 성산읍 성산리"
            />
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="w-[30px] h-[30px] flex justify-center items-center bg-button-basic text-white text-[14px] font-bold rounded-[50%]">
              3
            </div>
            <TripPlanCard
              imgPath="/images/성산일출봉.jpeg"
              placeName="성산일출봉"
              placeAddress="제주 서귀포시 성산읍 성산리"
            />
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="w-[30px] h-[30px] flex justify-center items-center bg-button-basic text-white text-[14px] font-bold rounded-[50%]">
              3
            </div>
            <TripPlanCard
              imgPath="/images/성산일출봉.jpeg"
              placeName="성산일출봉"
              placeAddress="제주 서귀포시 성산읍 성산리"
            />
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="w-[30px] h-[30px] flex justify-center items-center bg-button-basic text-white text-[14px] font-bold rounded-[50%]">
              3
            </div>
            <TripPlanCard
              imgPath="/images/성산일출봉.jpeg"
              placeName="성산일출봉"
              placeAddress="제주 서귀포시 성산읍 성산리"
            />
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="w-[30px] h-[30px] flex justify-center items-center bg-button-basic text-white text-[14px] font-bold rounded-[50%]">
              3
            </div>
            <TripPlanCard
              imgPath="/images/성산일출봉.jpeg"
              placeName="성산일출봉"
              placeAddress="제주 서귀포시 성산읍 성산리"
            />
          </div>
          <div className="flex items-center gap-[15px]">
            <div className="w-[30px] h-[30px] flex justify-center items-center bg-button-basic text-white text-[14px] font-bold rounded-[50%]">
              3
            </div>
            <TripPlanCard
              imgPath="/images/성산일출봉.jpeg"
              placeName="성산일출봉"
              placeAddress="제주 서귀포시 성산읍 성산리"
            />
          </div>
        </section>
      </section>
      <button className="w-[200px] h-[35px] p-[5px] rounded-[5px] items-center bg-button-basic text-[14px] text-white hover:bg-button-hover">
        수정 완료
      </button>
    </div>
  );
}
