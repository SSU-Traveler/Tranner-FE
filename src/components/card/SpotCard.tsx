// SpotCard 컴포넌트가 받게 될 props
// 1. 이미지 경로  예) "/images/example-gwanghwamun.jpg"
// 2. 명소 이름    예) "광화문"

interface SpotCardProps {
  imgPath: string;
  spotName: string;
}

export default function SpotCard({ imgPath, spotName }: SpotCardProps) {
  const openCardModal = () => {
    console.log('명소 카드를 클릭하면 카드 모달이 뜨게 해야 함');
    // 이 함수를 따로 빼는 게 좋을 듯? -> LocalCard 컴포넌트에서도 쓰이니까
  };

  return (
    <div
      className="w-[250px] h-[300px] bg-white rounded-[16px] border border-[#B2B9C0] hover:cursor-pointer flex flex-col gap-[5px] items-center p-[10px]"
      onClick={openCardModal}
    >
      <img src={imgPath} alt={spotName} className="w-[230px] h-[260px] rounded-[16px]" />
      <p className="text-[#495057] font-bold text-[18px] self-start">{spotName}</p>
    </div>
  );
}
