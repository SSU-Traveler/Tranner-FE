// TripPlanCard 컴포넌트가 받게 될 props
// 1. 이미지 경로   예) "/images/성산일출봉.jpeg"
// 2. 장소 이름     예) "성산일출봉"
// 3. 장소 주소     예) "제주 서귀포시 성산읍 성산리"

interface TripPlanCardProps {
  imgPath: string;
  placeName: string;
  placeAddress: string;
}

export default function TripPlanCard({ imgPath, placeName, placeAddress }: TripPlanCardProps) {
  return (
    <div className="w-[340px] h-[80px] rounded-[10px] flex shadow-custom items-center p-[10px] gap-[10px] bg-white">
      <img src={imgPath} alt={placeName} className="w-[100px] h-[60px] rounded-[10px]" />
      <div className="flex flex-col gap-[4px]">
        <p className="text-[12px] font-bold">{placeName}</p>
        <p className="text-[12px]">{placeAddress}</p>
      </div>
      {/* x 버튼 넣어야 함 */}
    </div>
  );
}
