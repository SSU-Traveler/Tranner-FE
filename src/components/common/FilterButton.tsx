interface FilterButtonProp {
  buttonName: string;
}

export default function FilterButton({ buttonName }: FilterButtonProp) {
  return (
    <button className="min-w-[62px] h-[32px] px-[16px] py-[4px] rounded-[16px] border border-black bg-white hover:bg-button-selected hover:text-white hover:font-bold hover:border-button-selected">
      {buttonName}
    </button>
  );
}
