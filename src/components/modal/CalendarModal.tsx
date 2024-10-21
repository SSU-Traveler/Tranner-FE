import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays, addYears, subDays } from 'date-fns';
import { ko } from 'date-fns/locale';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

const CalendarModal = () => {
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

  return (
    <div>
      <h2>여행 날짜 선택</h2>
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
    </div>
  );
};

export default CalendarModal;
