import { basketType } from '../../types/basket.type';

interface Props {
  selectedSpots: basketType[];
  handleSelectedSpots: () => void;
  currSelectedSpot: basketType;
  handleClick: (index: number) => void;
}

const SelectedSpot = ({ selectedSpots, handleSelectedSpots, currSelectedSpot, handleClick }: Props) => {
  return (
    <div className="flex w-full justify-between h-[50px] items-center bg-white border border-[#D9D9D7] border-opacity-23 shadow-md justify-between p-2 mt-2">
      <div className="scroll flex w-[225px] overflow-auto">
        {selectedSpots.map((element, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`border border-[#495057] rounded-[30px] text-[13px] px-2 py-1 m-1 whitespace-nowrap hover:cursor-pointer ${
              currSelectedSpot === element ? 'bg-[#B2B9C0]' : 'bg-white'
            }`}
          >
            {element.spot}
          </div>
        ))}
      </div>
      <div onClick={handleSelectedSpots} className="text-[13px]">
        수정
      </div>
    </div>
  );
};

export default SelectedSpot;
