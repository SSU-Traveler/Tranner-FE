// SpotCard 컴포넌트가 받게 될 props
// 1. 이미지 경로  예) "/images/example-gwanghwamun.jpg"
// 2. 명소 국문 이름    예) "광화문"
// (여기부터는 CardModal에 넘겨주기 위해서 받아야 하는 props임)
// 3. 명소 영문 이름
// 4. 명소 주소
// 5. 명소 설명
// 6. 로그인이 필요하다는 알림(함수)

import { useModal } from '../../hooks/useModal';
import CardModal from '../modal/CardModal';

interface SpotCardProps {
  imgPath: string;
  spotName: string;
  spotEngName: string;
  spotDescription: string;
  spotAddress: string;
  needToLoginAlarm: () => void;
}

export default function SpotCard({
  imgPath,
  spotName,
  spotEngName,
  spotDescription,
  spotAddress,
  needToLoginAlarm,
}: SpotCardProps) {
  const { openModal } = useModal();

  const openCardModal = () => {
    openModal(
      <CardModal
        imgPath={imgPath}
        placeKorName={spotName}
        placeEngName={spotEngName}
        placeAddress={spotAddress}
        placeDescription={spotDescription}
        needToLoginAlarm={needToLoginAlarm}
      />
    );
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
