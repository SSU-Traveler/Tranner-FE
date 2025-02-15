interface Props {
  dropDownItemList: any[];
  selectedIndex: number; //1~
  dropdownStyle: string;
  handleElementClick: (date: number) => void;
}

const Dropdown = ({ dropDownItemList, selectedIndex, dropdownStyle, handleElementClick }: Props) => {
  return (
    <>
      {dropDownItemList.map((element, index) => (
        <div
          key={index}
          onClick={() => handleElementClick(index + 1)}
          className={`${dropdownStyle} ${selectedIndex === index + 1 ? 'bg-[#2E3FC9]' : 'bg-button-selected'}`}
        >
          {element}
        </div>
      ))}
    </>
  );
};

export default Dropdown;
