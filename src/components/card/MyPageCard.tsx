// MyPageCard 컴포넌트가 받게 될 prop
// 1. 여행 패키지("schedule" 배열) => 바꿔야 함
// 1-1) 이미지 경로 -> 여기서 어떤 이미지를 써야 할지?
// 1-2) 여행 이름   예) "여행 1"
// 1-3) 여행 시작일 -> 정확히 어떤 형식으로 받아지는지?
// 1-4) 여행 종료일
// 1-5) 인원수      예) 4

import { Schedule } from '../../types/schedule.type';
import changeDateFormat from '../../utils/changeDateFormat';

interface MyPageCardProp {
  tripPackage: Schedule[];
}

export default function MyPageCard({ tripPackage }: MyPageCardProp) {
  // 나중에 여기 수정해야 함
  const dayDiff: number =
    (tripPackage[0].tripEndDate.getTime() - tripPackage[0].tripStartDate.getTime()) / (1000 * 60 * 60 * 24);
  const formattedTripStartDate: string = changeDateFormat(tripPackage[0].tripStartDate);
  const formattedTripEndDate: string = changeDateFormat(tripPackage[0].tripEndDate);

  return (
    // {tripPackage.map(trip => (
    //   <div className="w-[1000px] h-[200px] bg-white rounded-[16px] border border-[#B2B9C0] flex gap-[30px] hover:cursor-pointer">
    //   <img src={trip.imgPath} alt={trip.tripTitle} className="w-[320px] h-[200px] rounded-[16px]" />
    //   <div className="h-[180px] border border-[#B2B9C0] my-[10px]"></div>
    //   <div className="flex flex-col gap-[4px] justify-center">
    //     <p className="text-[40px] font-bold mb-[8px]">{trip.tripTitle}</p>
    //     <p className="text-[18px]">
    //       {formattedTripStartDate} ~ {formattedTripEndDate} ({dayDiff}일)
    //     </p>
    //     <p className="text-[18px]">{trip.numberOfPeople}명</p>
    //   </div>
    // </div>
    // ))}
    <div>임시</div>
  );
}
// 이 카드를 클릭하면 정확히 뭐가 뜨는지?
