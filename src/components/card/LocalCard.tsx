// LocalCard 컴포넌트가 받게 될 props
// 1. 이미지 경로   예) '/images/example-jeju.jpg'
// 2. 지역 이름     예) "제주 제주시"
//

import { useModal } from '../../hooks/useModal';
import CardModal from '../modal/CardModal';

interface LocalCardProps {
  imgPath: string;
  localName: string;
  localDescription: string;
  needToLoginAlarm: () => void;
}

export default function LocalCard({ imgPath, localName, localDescription, needToLoginAlarm }: LocalCardProps) {
  const { openModal } = useModal();

  const openCardModal = () => {
    openModal(
      <CardModal
        imgPath={imgPath}
        placeKorName={localName}
        placeDescription={localDescription}
        needToLoginAlarm={needToLoginAlarm}
      />
    );
  };

  return (
    <div
      style={{ backgroundImage: `url(${imgPath})` }}
      className="w-[250px] h-[300px] rounded-[16px] border border-[#B2B9C0] bg-cover bg-center hover:cursor-pointer flex items-end"
      onClick={openCardModal}
    >
      <div className="rounded-bl-[16px] px-[10px] py-[3px] bg-black">
        <p className="text-white font-bold text-[20px]">{localName}</p>
      </div>
    </div>
  );
}
