import { useState } from 'react';

interface Props {
  dateList: Date[];
  currentDate: number;
  handleCurrentDate: (date: number) => void;
}

const PlaceSearch = ({ dateList, currentDate, handleCurrentDate }: Props) => {
  const [visible, setVisible] = useState(true);

  const handleShow = () => {
    setVisible(!visible);
  };

  return (
    <div className="w-[300px] p-3">
      <div className="flex w-full h-[35px] bg-button-selected border rounded-[10px] text-white px-2 py-1 mt-3 justify-between items-center">
        <p className="font-bold">{currentDate}일차에 추가</p>
        <p onClick={handleShow} className="">
          {visible ? '위쪽 버튼' : '아래'}
        </p>
      </div>
      <div className="flex w-full h-[35px] items-center bg-white border border-[#D9D9D7] border-opacity-23 shadow-md justify-between p-1 mt-2">
        <p className="text-xs text-gray-400">장소를 입력해주세요.</p>
        <p>검색</p>
      </div>
      <div className="flex items-center justify-center bg-[#495057] text-xs text-white p-1 mt-2">찜한 장소 보기</div>
    </div>
  );
};

export default PlaceSearch;
