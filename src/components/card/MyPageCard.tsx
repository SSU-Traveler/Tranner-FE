// MyPageCard 컴포넌트가 받게 될 props
// 1. 이미지 경로 -> 여기서 어떤 이미지를 써야 할지?
// 2. 여행 이름   예) "여행 1"
// 3. 여행 시작일 -> 정확히 어떤 형식으로 받아지는지?
// 4. 여행 종료일
// 5. 인원수      예) 4

import changeDateFormat from '../../utils/changeDateFormat';

interface MyPageCardProps {
  imgPath: string;
  tripTitle: string;
  tripStartDate: Date;
  tripEndDate: Date;
  numberOfPeople: number;
}

export default function MyPageCard({
  imgPath,
  tripTitle,
  tripStartDate,
  tripEndDate,
  numberOfPeople,
}: MyPageCardProps) {
  const dayDiff: number = (tripEndDate.getTime() - tripStartDate.getTime()) / (1000 * 60 * 60 * 24);
  const formattedTripStartDate: string = changeDateFormat(tripStartDate);
  const formattedTripEndDate: string = changeDateFormat(tripEndDate);

  return (
    <div className="w-[1000px] h-[200px] bg-white rounded-[16px] border border-[#B2B9C0] flex gap-[30px] hover:cursor-pointer">
      <img src={imgPath} alt={tripTitle} className="w-[320px] h-[200px] rounded-[16px]" />
      <div className="h-[180px] border border-[#B2B9C0] my-[10px]"></div>
      <div className="flex flex-col gap-[4px] justify-center">
        <p className="text-[40px] font-bold mb-[8px]">{tripTitle}</p>
        <p className="text-[18px]">
          {formattedTripStartDate} ~ {formattedTripEndDate} ({dayDiff}일)
        </p>
        <p className="text-[18px]">{numberOfPeople}명</p>
      </div>
    </div>
  );
}
// 이 카드를 클릭하면 정확히 뭐가 뜨는지?
