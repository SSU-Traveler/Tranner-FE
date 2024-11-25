import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makePlanApi } from '../../api/tripPlan.api';
import { tripDate, userPlaceType } from '../../types/tripPlan.type';
import dateWithDays from '../../utils/dateWithDay';
import TripPlanBox from './TripPlanBox';

interface Props {
  planName: string;
  numberOfPeople: number;
  tripDate: tripDate;
  elementObj: userPlaceType[];
  handlePlanName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNumofPeople: (arg1: string) => void;
  openModal: () => void;
  handleDelete: (elementObj: userPlaceType) => void;
  dateList: Date[];
}

const TripPlanInfo = ({
  planName,
  numberOfPeople,
  tripDate,
  elementObj,
  handlePlanName,
  handleNumofPeople,
  openModal,
  handleDelete,
  dateList,
}: Props) => {
  const navigate = useNavigate();
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

  const makePlan = async () => {
    const resposne = await makePlanApi(planName, numberOfPeople, tripDate, elementObj, navigate);
    console.log(resposne);
    if (resposne === '스케줄 생성 성공') {
      console.log('성공');
      //계획 생성 완료 모달 띄우기
      //이동할 페이지?
      navigate('/');
    }
  };

  return (
    <div className="w-[400px] p-4 h-[100vh] border-r border-[#D9D9D9] border-opacity-23">
      <div className="pb-2 h-[100px]">
        <div ref={nameRef}>
          {editable ? (
            <input
              type="text"
              value={planName}
              onChange={(e) => handlePlanName(e)}
              onKeyDown={handleKeyDown}
              className="outline-none text-[28px] font-bold"
            />
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
        <div className="flex itmes-center">
          인원수: {numberOfPeople} 명
          <button
            type="button"
            onClick={() => {
              if (numberOfPeople > 1) {
                handleNumofPeople('-');
              }
            }}
            className="flex items-center justify-center w-[24px] h-[24px] bg-button-selected text-white font-bold rounded-[5px] mx-1 pb-1"
          >
            -
          </button>
          <button
            type="button"
            onClick={() => handleNumofPeople('+')}
            className="flex items-center justify-center w-[24px] h-[24px] bg-button-selected text-white font-bold rounded-[5px] pb-1"
          >
            +
          </button>
        </div>
      </div>
      <TripPlanBox elementObj={elementObj} handleDelete={handleDelete} dateList={dateList} />
      <button
        type="button"
        disabled={Array.isArray(elementObj) && elementObj.length === 0}
        className={`text-white font-bold justify-center items-center flex w-[350px] h-[40px] rounded-[10px] ${
          Array.isArray(elementObj) && elementObj.length !== 0
            ? 'bg-button-basic hover:bg-button-hover'
            : 'bg-[#d9d9d9]'
        }`}
        onClick={makePlan}
      >
        일정 생성
      </button>
    </div>
  );
};

export default TripPlanInfo;
