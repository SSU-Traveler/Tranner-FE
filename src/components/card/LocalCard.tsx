// LocalCard 컴포넌트가 받게 될 props
// 1. 이미지 경로   예) '/images/example-jeju.jpg'
// 2. 지역 이름     예) "제주 제주시"

interface LocalCardProps {
  imgPath: string;
  localName: string;
}

export default function LocalCard({ imgPath, localName }: LocalCardProps) {
  const openCardModal = () => {
    console.log('지역 카드를 클릭하면 카드 모달이 뜨게 해야 함');
    // 이 함수를 따로 빼는 게 좋을 듯? -> SpotCard 컴포넌트에서도 쓰이니까
  };

  return (
    <div
      className={`w-[250px] h-[300px] rounded-[16px] bg-[url("${imgPath}")] bg-cover bg-center hover:cursor-pointer flex items-end`}
      onClick={openCardModal}
    >
      <p className="text-white font-bold text-[24px] pl-[10px] pb-[10px]">{localName}</p>
    </div>
  );
}
