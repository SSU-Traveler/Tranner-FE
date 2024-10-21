declare module 'react-date-range' {
  import * as React from 'react';

  export interface DateRange {
    startDate: Date | null;
    endDate: Date | null;
    key: string;
  }

  export interface DateRangePickerProps {
    locale: object;
    months?: number;
    direction?: 'horizontal' | 'vertical';
    ranges: DateRange[];
    moveRangeOnFirstSelection?: boolean;
    onChange: (range: { selection: DateRange }) => void;
    minDate: Date;
    maxDate: Date;
  }

  export class DateRangePicker extends React.Component<DateRangePickerProps> {}
}
