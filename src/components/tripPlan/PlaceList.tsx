import { placeObjType } from '../../types/tripPlan.type';
import PlaceElement from './PlaceElement';

interface Props {
  placeObjList: placeObjType[];
  handlePlaceObjList: (index: number, placeObj: placeObjType) => void;
  scrollRef: React.RefObject<HTMLDivElement>;
}

const PlaceList = ({ placeObjList, handlePlaceObjList, scrollRef }: Props) => {
  return (
    <div ref={scrollRef} className="scroll w-[full] justify-center my-4 h-[calc(100%-180px)] overflow-auto">
      {placeObjList.map((element, index) => (
        <div key={index}>
          <PlaceElement index={index} placeObj={element} handlePlaceObjList={handlePlaceObjList} />
        </div>
      ))}
    </div>
  );
};

export default PlaceList;
