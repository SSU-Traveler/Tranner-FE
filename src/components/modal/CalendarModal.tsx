import React, { Dispatch, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays, addYears, subDays } from 'date-fns';
import { ko } from 'date-fns/locale';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import ModalContainer from './ModalContainer';
interface Props {
  closeModal: () => void;
  handleTripDate: Dispatch<React.SetStateAction<{ tripStartDate: string; tripEndDate: string }>>;
}

const CalendarModal = ({ closeModal, handleTripDate }: Props) => {
  const today = new Date();

  const [selectionRange, setSelectionRange] = useState({
    startDate: today,
    endDate: today,
    key: 'selection',
  });

  const [isRangeSelected, setIsRangeSelected] = useState(true);

  const [minDate, setMinDate] = useState(today);
  const [maxDate, setMaxDate] = useState(addYears(today, 5));

  const handleSelect = (ranges: any) => {
    setSelectionRange(ranges.selection);
    setIsRangeSelected(!isRangeSelected);
    console.log(isRangeSelected);
    if (isRangeSelected) {
      //아직 set~~이 반영되지 않았기 때문에 조건이 !isRangeSelected가 아님.
      if (today.getTime() < subDays(ranges.selection.startDate.getTime(), 14)) {
        setMinDate(subDays(ranges.selection.startDate.getTime(), 13));
      }
      setMaxDate(addDays(ranges.selection.startDate, 13));
    } else {
      setMinDate(today);
      setMaxDate(addYears(today, 5));
    }
  };

  const selectCompleted = () => {
    if (selectionRange.startDate && selectionRange.endDate) {
      handleTripDate({
        tripStartDate: selectionRange.startDate.toISOString(), // string으로 변환
        tripEndDate: selectionRange.endDate.toISOString(), // string으로 변환
      });
      closeModal();
    }
  };

  return (
    <ModalContainer>
      <div className="fixed inset-0 bg-black bg-opacity-20 z-50">
        <div className="w-[900px] h-fit rounded-[15px] bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-between p-4">
            <div className="flex-1 text-center">
              <p className="text-[23px] mt-[40px]">여행 날짜를 선택해주세요</p>
              <p className="text-xs mt-[30px]">* 여행 날짜는 최대 14일까지 설정 가능합니다.</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            {/* <h2>여행 날짜 선택</h2> */}
            <DateRangePicker
              locale={ko}
              months={2}
              direction="horizontal"
              ranges={[selectionRange]}
              moveRangeOnFirstSelection={false}
              onChange={handleSelect}
              minDate={minDate}
              maxDate={maxDate}
            />
            <div
              onClick={isRangeSelected ? selectCompleted : undefined}
              className="w-[100px] bg-black text-white text-center m-10 p-1 border rounded-[5px]"
            >
              선택
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

// const Overlay = styled.div`
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   background: rgba(0, 0, 0, 0.2);
//   z-index: 9999;
// `;

// const ModalWrap = styled.div`
//   width: 600px;
//   height: fit-content;
//   border-radius: 15px;
//   background-color: #fff;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// `;
export default CalendarModal;
