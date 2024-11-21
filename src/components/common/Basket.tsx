import { useState } from 'react';
import { useAlarm } from './../../hooks/useAlarm';

export default function Basket() {
  const [isLogin, setIsLogin] = useState<boolean>(false); // notiflix 테스트용
  const [isOpen, setIsOpen] = useState<boolean>(true); // 슬라이더 상태 관리
  const { needToLoginAlarm } = useAlarm();

  const handleToggleButton = () => {
    setIsOpen(!isOpen);
  };

  const subtractElement = () => {
    console.log('클릭하면 빼기');
  };

  const handlePlanTrip = () => {
    if (!isLogin) {
      needToLoginAlarm();
    } else {
      console.log('TODO: 여행 계획하는 기능 구현');
    }
  };

  return (
    <div className="flex">
      <div className="min-w-fit h-[55px] flex gap-[7px] px-[10px] bg-button-selected rounded-l-[10px] justify-around items-center text-white font-bold text-[18px]">
        <img src="/basket.svg" alt="장바구니" />
        <button onClick={handleToggleButton}>{isOpen ? '〉' : '〈'}</button>
      </div>
      <div
        className={
          isOpen
            ? 'flex border border-[#B2B9C0] h-[55px] w-[900px] rounded-r-[10px] items-center justify-between'
            : 'hidden'
        }
      >
        <div className="flex mx-[10px] gap-[5px]">
          <div className="flex justify-center items-center gap-[7px] min-w-[62px] h-[32px] px-[16px] py-[4px] rounded-[16px] border border-black bg-white">
            <p>길동</p>
            <img
              src="/close-button.svg"
              alt="닫기"
              width="9px"
              height="9px"
              className="hover: cursor-pointer"
              onClick={subtractElement}
            />
          </div>
          <div className="flex justify-center items-center gap-[7px] min-w-[62px] h-[32px] px-[16px] py-[4px] rounded-[16px] border border-black bg-white">
            <p>길동</p>
            <img
              src="/close-button.svg"
              alt="닫기"
              width="9px"
              height="9px"
              className="hover: cursor-pointer"
              onClick={subtractElement}
            />
          </div>
        </div>
        <button
          className="h-[35px] bg-button-basic hover:bg-button-hover text-white rounded-[8px] px-[10px] py-[5px] font-bold mr-[10px]"
          onClick={handlePlanTrip}
        >
          여행 계획하기
        </button>
      </div>
    </div>
  );
}
