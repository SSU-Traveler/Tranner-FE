import { useState } from 'react';
import changeDateFormat from '../../utils/changeDateFormat';
import TripPlanListElement from './TripPlanListElement';
import { userPlaceType } from '../../types/tripPlan.type';
import dateWithDays from '../../utils/dateWithDay';

interface Props {
  dateIndex: number;
  date: Date;
  elementObj: userPlaceType[];
  deleteElement: (elementObj: userPlaceType) => void;
}

const TripPlanList = ({ dateIndex, date, elementObj, deleteElement }: Props) => {
  const formattedTripDate = dateWithDays(date.toDateString());
  const [visible, setVisible] = useState(true);

  const handleShow = () => {
    setVisible(!visible);
  };

  const handleElementObj = () => {};

  return (
    <div>
      <div className="flex w-full h-[35px] bg-button-selected border rounded-[15px] text-white px-2 py-1 my-3 justify-between items-center">
        <p className="font-bold">{dateIndex}일차 일정</p>
        <div className="flex flex-row items-center">
          <p className="text-xs pr-2">{formattedTripDate}</p>
          <div onClick={handleShow} className="">
            {visible ? '위쪽 버튼' : '아래'}
          </div>
        </div>
      </div>
      <div>
        {visible
          ? elementObj.map((element, index) => (
              <TripPlanListElement elementOrder={index} elementObj={element} deleteElement={deleteElement} />
            ))
          : null}
      </div>
    </div>
  );
};

export default TripPlanList;
