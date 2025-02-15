// SurveyResultCard 컴포넌트가 받게 될 props
// 1. 이미지 경로
// 2. 명소 국문 이름
// 여기부터는 모달 띄울 때 필요한 props -> 근데 모달 위에 모달 띄우면 에러 남
// 3. 명소 주소
// 4. 명소 설명
// 5. 로그인이 필요하다는 알림(함수)

interface SurveyResultCardProps {
  imgPath: string;
  spotName: string;
}

export default function SurveyResultCard({ imgPath, spotName }: SurveyResultCardProps) {
  const truncateWord = (placeName: string) => {
    if (placeName.length > 14) {
      return placeName.slice(0, 13) + '...';
    }
    return placeName;
  };

  return (
    <>
      <div className="w-[220px] h-[264px] bg-white rounded-[16px] border border-[#B2B9C0] hover:cursor-pointer flex flex-col gap-[5px] items-center p-[10px]">
        <img src={imgPath} alt={spotName} className="w-[200px] h-[220px] rounded-[16px] object-cover" />
        <p className="text-[#495057] font-bold text-[15px] self-start">{truncateWord(spotName)}</p>
      </div>
    </>
  );
}
