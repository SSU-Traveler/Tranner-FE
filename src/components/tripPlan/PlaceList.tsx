import { userPlaceType } from '../../types/tripPlan.type';
import PlaceElement from './PlaceElement';

type PlaceObjListType = {
  isInPlanList: boolean;
  placeName: string; //name 장소 이름
  addr: string; //formattedAddress  주소
};

interface Props {
  placeObjList: PlaceObjListType[];
  handlePlaceObjList: () => void;
}

const PlaceList = ({ placeObjList, handlePlaceObjList }: Props) => {
  return (
    <div>
      {placeObjList.map((element, index) => (
        <PlaceElement placeObjList={element} handlePlaceObjList={handlePlaceObjList} />
      ))}
    </div>
  );
};

export default PlaceList;
