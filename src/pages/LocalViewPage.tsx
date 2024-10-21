import FilterButton from '../components/common/FilterButton';
import PlaceInput from '../components/input/PlaceInput';

export default function LocalViewPage() {
  return (
    <>
      <section
        style={{ backgroundImage: `url("images/place/seoul-lotte-world-tower.jpg")` }}
        className="absolute top-0 left-0 w-[100vw] h-[400px] bg-cover bg-center flex justify-center items-center"
      >
        <PlaceInput searchObj="여행지" />
      </section>
      <section className="absolute mt-[420px]">
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px] ">
          <nav className="flex flex-wrap gap-[8px] mb-[20px]">
            <FilterButton buttonName="서울" />
            <FilterButton buttonName="경기" />
            <FilterButton buttonName="인천" />
            <FilterButton buttonName="서대문구" />
          </nav>
        </div>
      </section>
    </>
  );
}
