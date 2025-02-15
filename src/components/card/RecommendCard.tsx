import clsx from 'clsx';
import { useState } from 'react';

const iconStyle = 'w-[12px] h-[12px] hover:cursor-pointer';

// RecommendCard 컴포넌트가 받게 될 props
// 1. 이미지 경로   예) "/images/성산일출봉.jpeg"
// 2. 장소 이름     예) "성산일출봉"
// 3. 장소 주소     예) "제주 서귀포시 성산읍 성산리"

interface RecommendCardProps {
  imgPath: string;
  placeName: string;
  placeAddress: string;
}

export default function RecommendCard({ imgPath, placeName, placeAddress }: RecommendCardProps) {
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const toggleTripPlan = () => {
    setIsRegistered((prev) => !prev);
  };

  return (
    <div className="w-[340px] h-[80px] rounded-[10px] flex shadow-custom justify-between items-center p-[10px] gap-[10px] bg-white">
      <div className="flex gap-[10px]">
        <img src={imgPath} alt={placeName} className="w-[100px] h-[60px] rounded-[10px]" />
        <div className="flex flex-col">
          <p className="text-[12px] font-bold">{placeName}</p>
          <p className="text-[12px] mb-[4px]">{placeAddress}</p>
          {isSaved ? (
            <img
              src="/full-heart.svg"
              alt="찜한 후"
              className={iconStyle}
              onClick={() => setIsSaved((prev) => !prev)}
            />
          ) : (
            <img
              src="/empty-heart.svg"
              alt="찜하기 전"
              className={iconStyle}
              onClick={() => setIsSaved((prev) => !prev)}
            />
          )}
        </div>
      </div>
      <button
        className={clsx(
          'w-[25px] h-[60px] rounded-[6px] flex justify-center items-center text-white font-bold',
          isRegistered ? 'bg-[#D9D9D9]' : 'bg-button-basic'
        )}
        onClick={toggleTripPlan}
      >
        {isRegistered ? '-' : '+'}
      </button>
    </div>
  );
}
