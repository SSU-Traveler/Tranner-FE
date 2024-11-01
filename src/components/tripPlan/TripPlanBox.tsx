import { useState } from 'react';
import TripPlanList from './TripPlanList';
import { userPlaceType } from '../../types/tripPlan.type';

interface Props {
  tripDate: {
    tripStartDate: string; // YYYY-MM-DD 형식으로 가정
    tripEndDate: string; // YYYY-MM-DD 형식으로 가정
  };
  elementObj: userPlaceType[];
  deleteElement: (elementObj: userPlaceType) => void;
  dateList: Date[];
}

const TripPlanBox = ({ tripDate, elementObj, deleteElement, dateList }: Props) => {
  const handleOrder = () => {};

  return (
    <div>
      <p onClick={handleOrder} className="text-xs button-basic">
        순서 수정
      </p>
      <ul>
        {dateList.map((date, index) => {
          // 날짜를 YYYY-MM-DD 형식으로 출력
          // <li key={index}>
          //   {date.toISOString().split('T')[0]}
          // </li>
          // daySequence가 index와 같은 요소만 필터링
          const filteredElements = elementObj.filter((element) => element.daySequence === index + 1);
          return (
            <li key={index}>
              <TripPlanList dateIndex={index} date={date} elementObj={filteredElements} deleteElement={deleteElement} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TripPlanBox;
