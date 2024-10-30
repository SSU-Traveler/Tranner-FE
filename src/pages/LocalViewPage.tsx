import FilterButtonFormat from '../components/format/FilterButtonFormat';
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
          <FilterButtonFormat />
        </div>
      </section>
    </>
  );
}
