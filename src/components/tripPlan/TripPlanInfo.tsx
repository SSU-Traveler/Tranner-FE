import { useRef, useState, useEffect } from 'react';
import TripPlanBox from './TripPlanBox';
import changeDateFormat from '../../utils/changeDateFormat';
import { userPlaceType } from '../../types/tripPlan.type';
import dateWithDays from '../../utils/dateWithDay';
import { isEmpty } from '../../utils/checkObjectEmpty';

interface Props {
  planName: string;
  numberOfPeople: number;
  tripDate: {
    tripStartDate: string; // YYYY-MM-DD 형식으로 가정
    tripEndDate: string; // YYYY-MM-DD 형식으로 가정
  };
  elementObj: userPlaceType[];
  isOpen: boolean;
  handlePlanName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNumofPeople: (arg1: string) => void;
  openModal: () => void;
  deleteElement: (elementObj: userPlaceType) => void;
  dateList: Date[];
}

const TripPlanInfo = ({
  planName,
  numberOfPeople,
  tripDate,
  elementObj,
  isOpen,
  handlePlanName,
  handleNumofPeople,
  openModal,
  deleteElement,
  dateList,
}: Props) => {
  const nameRef = useRef<HTMLDivElement | null>(null);
  const formattedStartDate = dateWithDays(tripDate.tripStartDate);
  const formattedEndDate = dateWithDays(tripDate.tripEndDate);
  const [editable, setEditable] = useState(false);

  const editOn = () => {
    setEditable(!editable);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setEditable(!editable);
    }
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (editable == true && nameRef.current && !nameRef.current.contains(e.target as Node)) {
      setEditable(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside, true);
    return () => {
      window.removeEventListener('click', handleClickOutside, true);
    };
  }, [editable]);

  return (
    <div className="w-[400px] p-4 h-[100vh]">
      <div className="pb-2 h-[100px]">
        <div ref={nameRef}>
          {editable ? (
            <input type="text" value={planName} onChange={(e) => handlePlanName(e)} onKeyDown={handleKeyDown} />
          ) : (
            <div onClick={editOn} className="text-[28px] font-bold">
              {planName}
            </div>
          )}
        </div>
        <div onClick={openModal}>
          {/* {formattedTripDate.tripStartDate}({tripDay.tripStartDay}) - {formattedTripDate.tripEndDate}(
          {tripDay.tripEndDay}) */}
          {formattedStartDate} - {formattedEndDate}
        </div>
        <div className="flex">
          인원수: {numberOfPeople} 명
          <button
            type="button"
            onClick={() => {
              if (numberOfPeople > 0) {
                handleNumofPeople('-');
              }
            }}
          >
            -
          </button>
          <button type="button" onClick={() => handleNumofPeople('+')}>
            +
          </button>
        </div>
      </div>
      <TripPlanBox tripDate={tripDate} elementObj={elementObj} deleteElement={deleteElement} dateList={dateList} />
      <button
        type="button"
        disabled={Array.isArray(elementObj) && elementObj.length === 0}
        className={`text-white font-bold justify-center items-center flex w-[350px] h-[40px] rounded-[10px] ${
          Array.isArray(elementObj) && elementObj.length !== 0
            ? 'bg-button-basic hover:bg-button-hover'
            : 'bg-[#d9d9d9]'
        }`}
      >
        일정 생성
      </button>
    </div>
  );
};

export default TripPlanInfo;
