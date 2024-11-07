import { forwardRef } from 'react';

interface Props {
  ref: React.Ref<HTMLDivElement>;
}
const Map = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <div ref={ref} className="flex-grow h-auto " />;
});

export default Map;
