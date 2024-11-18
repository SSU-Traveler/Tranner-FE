import clsx from 'clsx';
import DOMPurify from 'dompurify';
import { useState } from 'react';
import useBasketStore from '../../zustand/basketStore';

const buttonStyle =
  'w-[200px] h-[50px] p-[10px] rounded-[5px] font-bold bg-button-basic text-white hover:bg-button-hover';

// CardModal 컴포넌트가 받게 될 props
// 1. 이미지 경로       예) "/images/성산일출봉.jpeg"
// 2. 장소 국문 이름    예) "성산일출봉"
// 3. 장소 영문 이름    예) "Seongsan Ilchulbong Tuff Cone Natural Reserve"
// 4. 장소 주소(선택사항: 만약 장소가 특정 명소가 아닌 지역이라면, 주소는 없음)
// 5. 장소 설명
// 6. 로그인이 필요하다는 알림(함수)

interface CardModalProps {
  imgPath: string;
  placeKorName: string;
  placeEngName?: string;
  placeAddress?: string;
  placeDescription: string;
  needToLoginAlarm: () => void;
}

export default function CardModal({
  imgPath,
  placeKorName,
  placeEngName,
  placeAddress,
  placeDescription,
  needToLoginAlarm,
}: CardModalProps) {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(false); // notiflix 테스트용

  const sanitizedHTML = DOMPurify.sanitize(placeDescription);

  const handleAddToCart = () => {
    if (!isLogin) {
      needToLoginAlarm();
    } else {
      console.log('TODO: 장바구니에 추가하는 기능 구현');
    }
  };

  const handleAddToTripCard = () => {
    if (!isLogin) {
      needToLoginAlarm();
    } else {
      console.log('TODO: 기존 여행 계획에 추가하는 기능 구현');
    }
  };

  return (
    <div className="w-[920px] h-[520px] rounded-[16px] flex gap-[20px] bg-white p-[20px]" id="modal-content">
      <img src={imgPath} alt={placeKorName} className="w-[450px] h-[480px]" />
      <div className="flex flex-col justify-between">
        <section>
          <section className="mb-[10px]">
            <section className="flex justify-between">
              <p className="text-[20px] font-bold">{placeKorName}</p>
              {placeAddress &&
                (isSaved ? (
                  <img
                    src="/full-heart.svg"
                    alt="찜한 후"
                    className="hover:cursor-pointer"
                    onClick={() => setIsSaved((prev) => !prev)}
                  />
                ) : (
                  <img
                    src="/empty-heart.svg"
                    alt="찜하기 전"
                    className="hover:cursor-pointer"
                    onClick={() => setIsSaved((prev) => !prev)}
                  />
                ))}
            </section>
            <p className="text-[14px] text-[#B2B9C0] mb-[4px]">{placeEngName}</p>
            {placeAddress && <p className="text-[13px] text-[#495057]">{placeAddress}</p>}
          </section>
          <div
            className={clsx(
              placeAddress ? 'h-[350px]' : 'h-[370px]',
              'w-[410px] overflow-y-auto overflow-x-hidden scrollbar-custom'
            )}
          >
            <p className="w-[400px] text-[15.5px]" dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></p>
          </div>
        </section>
        <section className="flex gap-[10px]">
          <button className={buttonStyle} onClick={handleAddToCart}>
            장바구니에 담기
          </button>
          <button className={buttonStyle} onClick={handleAddToTripCard}>
            기존 여행에 추가하기
          </button>
        </section>
      </div>
    </div>
  );
}
