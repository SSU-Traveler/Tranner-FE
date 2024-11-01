import { userPlaceType } from '../../types/tripPlan.type';

interface Props {
  elementObj: userPlaceType;
  deleteElement: (elementObj: userPlaceType) => void;
}

const TripPlanElement = ({ elementObj, deleteElement }: Props) => {
  const getPlaceName = (placeName: string) => {
    if (placeName.length > 12) {
      return placeName.slice(0, 11) + '...'; // 28번째 글자까지 잘라내고 '...' 추가
    }
    return placeName;
  };

  const getAddress = (addr: string) => {
    if (addr.length > 18) {
      return addr.slice(0, 15) + '...'; // 28번째 글자까지 잘라내고 '...' 추가
    }
    return addr;
  };

  return (
    <div className="flex w-full h-[80px] border border-[#D9D9D7] border-opacity-23 shadow-md rounded-[10px] ml-3 items-center justify-between p-2">
      <div className="flex items-center">
        <img src="/images/example-gwanghwamun.jpg" alt="description" className="w-[60px] h-[60px] rounded-[8px]" />
        <div className="flex flex-col justify-center ml-3">
          <p className="text-[16px] text-[#1B1D1F] font-bold">{getPlaceName(elementObj.placeName)}</p>
          <p className="text-[12px] text-[#495057]">{getAddress(elementObj.addr)}</p>
        </div>
      </div>
      <div
        onClick={() => deleteElement(elementObj)}
        className="flex items-center justify-center w-[20px] h-[20px] border rounded-[100%] text-[#495057] text-xs"
      >
        X
      </div>
    </div>
  );
};

export default TripPlanElement;
