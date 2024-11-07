import { useState } from 'react';
import SelectedSpot from './SelectedSpot';
import PlaceList from './PlaceList';
import Dropdown from '../common/Dropdown';
import { userPlaceType } from '../../types/tripPlan.type';

type PlaceObjListType = {
  isInPlanList: boolean;
  placeName: string; //name 장소 이름
  addr: string; //formattedAddress  주소
};

interface Props {
  dateList: Date[];
  currentDateIndex: number;
  handleCurrentDateIndex: (date: number) => void;
  selectedSpots: string[];
  handleSelectedSpots: () => void;
  currSelectedSpot: string;
  handleCurrSelectedSpot: (index: number) => void;
  placeObjList: PlaceObjListType[];
  handlePlaceObjList: () => void;
}

const PlaceSearch = ({
  dateList,
  currentDateIndex,
  handleCurrentDateIndex,
  selectedSpots,
  handleSelectedSpots,
  currSelectedSpot,
  handleCurrSelectedSpot,
  placeObjList,
  handlePlaceObjList,
}: Props) => {
  const element = dateList.map((dateElement, index) => {
    //index+1 '일차에 추가' 라는 string을 배열로 만들기
    return `${index + 1}일차에 추가`;
  });
  const [visible, setVisible] = useState(false);
  const dropdownStyle = 'flex w-full h-[35px] bg-button-selected border text-white px-2 py-1 items-center font-bold';
  const dropdownAnimation = `mt-[2px] w-full overflow-auto transition-all duration-500 ease-in-out transform ${
    visible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
  }`;

  const handleShow = () => {
    setVisible(!visible);
  };

  const handleElementClick = (dateIndex: number) => {
    handleCurrentDateIndex(dateIndex);
    setVisible(false);
  };

  return (
    <div className="w-[300px] p-3">
      <div className="relative">
        <div className="flex w-full h-[35px] bg-button-selected border text-white px-2 py-1 mt-3 justify-between items-center">
          <p className="font-bold">{currentDateIndex}일차에 추가</p>
          <p onClick={handleShow} className="">
            {visible ? '위쪽 버튼' : '아래'}
          </p>
        </div>
        <div className={'w-full flex flex-col items-center justify-center absolute z-10'}>
          {visible && (
            <div className={`${dropdownAnimation}`}>
              <Dropdown
                dropDownItemList={element}
                selectedIndex={currentDateIndex}
                dropdownStyle={dropdownStyle}
                handleElementClick={handleElementClick}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full h-[35px] items-center bg-white border border-[#D9D9D7] border-opacity-23 shadow-md justify-between p-1 mt-2">
        <p className="text-xs text-gray-400">장소를 입력해주세요.</p>
        <p>검색</p>
      </div>
      <div className="flex items-center justify-center bg-[#495057] text-xs text-white p-1 mt-2">찜한 장소 보기</div>
      <SelectedSpot
        selectedSpots={selectedSpots}
        handleSelectedSpots={handleSelectedSpots}
        currSelectedSpot={currSelectedSpot}
        handleCurrSelectedSpot={handleCurrSelectedSpot}
      />
      <PlaceList placeObjList={placeObjList} handlePlaceObjList={handlePlaceObjList} />
    </div>
  );
};

export default PlaceSearch;
