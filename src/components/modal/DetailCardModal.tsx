import { useState } from 'react';
import { placeDetailType } from '../../types/tripPlan.type';
import ModalContainer from './ModalContainer';

interface Props {
  placeDetailObj: placeDetailType;
  closeModal: () => void;
}

export default function DetailCardModal({ placeDetailObj, closeModal }: Props) {
  const [visible, setVisible] = useState(false);

  const handleShow = () => {
    setVisible(!visible);
  };

  return (
    <ModalContainer>
      <div className="fixed inset-0 bg-black bg-opacity-20 z-50">
        <div className="scroll w-[700px] h-auto max-h-[800px] overflow-auto rounded-[16px] flex flex-col bg-white p-[40px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 relative">
          <p onClick={closeModal} className="absolute right-[40px] w-[30px] h-[30px] flex justify-center font-bold">
            X
          </p>
          <div>
            <p className="text-[20px] font-bold">{placeDetailObj.placeName}</p>
            <p className="text-[12px] text-[#B2B9C0] mb-[4px]">{placeDetailObj.type}</p>
            <p className="text-[13px] text-[#495057] mb-[20px]">{placeDetailObj.addr}</p>
            {placeDetailObj.photoUrl ? (
              <img
                src={placeDetailObj.photoUrl}
                alt="description"
                className="w-[620px] h-[400px] rounded-[8px] mb-[20px]"
              />
            ) : (
              <div className="flex w-[620px] h-[400px] rounded-[8px] bg-gray-300 items-center justify-center text-[8px] text-white mb-[20px]">
                이미지 없음
              </div>
            )}
            <div className="flex">
              <i className="xi-star-o mr-1" />
              <p className="text-[13px] text-[#495057] mb-[4px]">평점 {placeDetailObj.rating}</p>
            </div>
            <div className="flex">
              <i className="xi-call mr-1" />
              <p className="text-[13px] text-[#495057] mb-[4px]">전화번호 {placeDetailObj.phoneNumber}</p>
            </div>
            <div className="flex">
              <i className="xi-map-o mr-1" />
              <p
                className="text-[13px] text-blue-400 mb-[4px] underline"
                onClick={() => {
                  window.open(placeDetailObj.googleMapsUrl);
                }}
              >
                구글맵 보기
              </p>
            </div>
            <div className="flex">
              <i className="xi-clock-o mr-1" />
              <div className="flex">
                <p className="text-[13px] text-[#495057] mb-[4px]">영업시간</p>
                <p onClick={handleShow} className="">
                  {visible ? <i className="xi-angle-up-min"></i> : <i className="xi-angle-down-min"></i>}
                </p>
              </div>
            </div>

            {visible && placeDetailObj.openingHours !== null && (
              <div>
                <p className="text-[11px] text-[#B2B9C0] mb-[4px]">{placeDetailObj.openingHours[0]}</p>
                <p className="text-[11px] text-[#B2B9C0] mb-[4px]">{placeDetailObj.openingHours[1]}</p>
                <p className="text-[11px] text-[#B2B9C0] mb-[4px]">{placeDetailObj.openingHours[2]}</p>
                <p className="text-[11px] text-[#B2B9C0] mb-[4px]">{placeDetailObj.openingHours[3]}</p>
                <p className="text-[11px] text-[#B2B9C0] mb-[4px]">{placeDetailObj.openingHours[4]}</p>
                <p className="text-[11px] text-[#B2B9C0] mb-[4px]">{placeDetailObj.openingHours[5]}</p>
                <p className="text-[11px] text-[#B2B9C0] mb-[4px]">{placeDetailObj.openingHours[6]}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </ModalContainer>
  );
}
