export default function PlaceInput() {
  return (
    <div className="w-[750px] h-[60px] border border-black rounded-[4px] px-[16px] flex items-center justify-between">
      <input type="text" placeholder="여행지를 검색해보세요!" />
      <button>
        <img src="/search-glasses.svg" alt="검색" />
      </button>
    </div>
  );
}
