type PlaceObjListType = {
  isInPlanList: boolean;
  placeName: string; //name 장소 이름
  addr: string; //formattedAddress  주소
};

interface Props {
  placeObjList: PlaceObjListType;
  handlePlaceObjList: () => void;
}

const PlaceElement = ({ placeObjList, handlePlaceObjList }: Props) => {
  return <div></div>;
};

export default PlaceElement;
