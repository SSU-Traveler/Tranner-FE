interface PlaceInputProp {
  searchObj: string;
}

export default function PlaceInput({ searchObj }: PlaceInputProp) {
  return (
    <div className="w-[750px] h-[60px] border border-black bg-white rounded-[4px] px-[16px] flex items-center justify-between">
      <input type="text" placeholder={`${searchObj}를 검색해보세요!`} className="w-[85%] outline-none" />
      <button>
        <img src="/search-glasses.svg" alt="검색" />
      </button>
    </div>
  );
}
