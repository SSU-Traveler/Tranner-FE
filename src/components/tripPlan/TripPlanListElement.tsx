import { userPlaceType } from '../../types/tripPlan.type';
import TripPlanElement from './TripPlanElement';

interface Props {
  elementOrder: number;
  elementObj: userPlaceType;
  handleDelete: (elementObj: userPlaceType) => void;
}

const TripPlanListElement = ({ elementOrder, elementObj, handleDelete }: Props) => {
  //const planElement
  return (
    <div className="p-3 flex items-center">
      <p className="flex items-center justify-center w-[25px] h-[25px] bg-button-basic rounded-[100%] text-white text-xs font-bold">
        {elementOrder + 1}
      </p>
      <TripPlanElement elementObj={elementObj} handleDelete={handleDelete} />
    </div>
  );
};

export default TripPlanListElement;
