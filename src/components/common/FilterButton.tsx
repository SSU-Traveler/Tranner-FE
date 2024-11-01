import clsx from 'clsx';

interface FilterButtonProps {
  buttonName: string;
  selectedOption: string;
  onClick: (option: string) => void;
}

export default function FilterButton({ buttonName, selectedOption, onClick: handleClickButton }: FilterButtonProps) {
  return (
    <button
      onClick={() => handleClickButton(buttonName)}
      className={clsx(
        'min-w-[62px] h-[32px] px-[16px] py-[4px] rounded-[16px] border hover:bg-button-selected hover:text-white hover:font-bold hover:border-button-selected',
        selectedOption === buttonName
          ? 'bg-button-selected border-button-selected text-white font-bold'
          : 'border-black bg-white'
      )}
    >
      {buttonName}
    </button>
  );
}
