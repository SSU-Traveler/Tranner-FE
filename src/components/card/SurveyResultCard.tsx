import { useState } from 'react';

export default function SurveyResultCard() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const truncateWord = (placeName: string) => {
    if (placeName.length > 14) {
      return placeName.slice(0, 13) + '...';
    }
    return placeName;
  };

  return (
    <>
      <div
        className="w-[220px] h-[264px] bg-white rounded-[16px] border border-[#B2B9C0] hover:cursor-pointer flex flex-col gap-[5px] items-center p-[10px]"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="/images/place/서울.jpg"
          alt="서울 롯데타워"
          className="w-[200px] h-[220px] rounded-[16px] object-cover"
        />
        <p className="text-[#495057] font-bold text-[15px] self-start">{truncateWord('서울 롯데타워')}</p>
      </div>
      {/* {isOpen && (
        <ModalContainer>
          <CardModal
            imgPath="/images/place/경기.jpg"
            placeKorName="수원 화성"
            placeAddress="주소"
            placeDescription="설명"
            // needToLoginAlarm={needToLoginAlarm}
          />
        </ModalContainer>
      )} */}
    </>
  );
}
