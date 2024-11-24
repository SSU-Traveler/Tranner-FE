import { useState } from 'react';
import { userPlaceType } from '../../types/tripPlan.type';
import dateWithDays from '../../utils/dateWithDay';
import TripPlanListElement from './TripPlanListElement';

interface Props {
  dateIndex: number;
  date: Date;
  elementObj: userPlaceType[];
  handleDelete: (elementObj: userPlaceType) => void;
}

const TripPlanList = ({ dateIndex, date, elementObj, handleDelete }: Props) => {
  const formattedTripDate = dateWithDays(date.toDateString());
  const [visible, setVisible] = useState(true);

  const handleShow = () => {
    setVisible(!visible);
  };

  const handleElementObj = () => {};

  return (
    <div className="scroll overflow-auto px-1">
      <div className="flex w-full h-[35px] bg-button-selected border rounded-[15px] text-white px-2 py-1 my-3 justify-between items-center">
        <p className="font-bold">{dateIndex}일차 일정</p>
        <div className="flex flex-row items-center">
          <p className="text-xs pr-2">{formattedTripDate}</p>
          <div onClick={handleShow} className="">
            {visible ? <i className="xi-angle-up-min"></i> : <i className="xi-angle-down-min"></i>}
          </div>
        </div>
      </div>
      <div>
        {visible
          ? elementObj.map((element, index) => (
              <div key={index}>
                <TripPlanListElement elementOrder={index} elementObj={element} handleDelete={handleDelete} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default TripPlanList;
