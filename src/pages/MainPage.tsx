import { useRef } from 'react';
import Slider from 'react-slick';
import { CustomNextArrow, CustomPrevArrow } from '../components/arrow/CustomArrow';
import SpotCard from '../components/card/SpotCard';
import FilterButton from '../components/common/FilterButton';
import PlaceInput from '../components/input/PlaceInput';

const h1Style = 'font-bold text-[24px]';
const sectionStyle = 'my-[20px] flex flex-col gap-[10px]';

export default function MainPage() {
  const sliderRef = useRef<null | Slider>(null);

  const playSlider = () => {
    if (sliderRef.current) sliderRef.current.slickPlay();
  };
  const pauseSlider = () => {
    if (sliderRef.current) sliderRef.current.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <>
      <section className={sectionStyle}>
        <h1 className={h1Style}>최근 인기 여행지</h1>
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px]">
          <Slider ref={sliderRef} {...settings}>
            <SpotCard imgPath="/images/example-gwanghwamun.jpg" spotName="광화문" />
            <SpotCard imgPath="/images/example-lotteworld.jpg" spotName="롯데월드" />
            <SpotCard imgPath="/images/example-lotteworld.jpg" spotName="롯데월드" />
            <SpotCard imgPath="/images/example-gwanghwamun.jpg" spotName="광화문" />
            <SpotCard imgPath="/images/example-lotteworld.jpg" spotName="롯데월드" />
            <SpotCard imgPath="/images/example-gwanghwamun.jpg" spotName="광화문" />
            <SpotCard imgPath="/images/example-gwanghwamun.jpg" spotName="광화문" />
            <SpotCard imgPath="/images/example-lotteworld.jpg" spotName="롯데월드" />
          </Slider>
          <div className="mt-[30px] flex gap-[5px] justify-center">
            <button onClick={playSlider}>
              <img src="/play-button.svg" alt="play" />
            </button>
            <button onClick={pauseSlider}>
              <img src="/pause-button.svg" alt="pause" />
            </button>
          </div>
        </div>
      </section>
      <section className={sectionStyle}>
        <h1 className={h1Style}>여행지 찾기</h1>
        <div className="flex justify-center">
          <PlaceInput searchObj="여행지" />
        </div>
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px]">
          <nav className="flex flex-wrap gap-[8px] mb-[20px]">
            <FilterButton buttonName="서울" />
            <FilterButton buttonName="경기" />
            <FilterButton buttonName="인천" />
            <FilterButton buttonName="서대문구" />
          </nav>
          <div className="flex flex-wrap justify-between gap-[20px]">
            <SpotCard imgPath="/images/example-lotteworld.jpg" spotName="롯데월드" />
            <SpotCard imgPath="/images/example-lotteworld.jpg" spotName="롯데월드" />
            <SpotCard imgPath="/images/example-lotteworld.jpg" spotName="롯데월드" />
            <SpotCard imgPath="/images/example-lotteworld.jpg" spotName="롯데월드" />
            <SpotCard imgPath="/images/example-lotteworld.jpg" spotName="롯데월드" />
            <SpotCard imgPath="/images/example-lotteworld.jpg" spotName="롯데월드" />
          </div>
        </div>
      </section>
    </>
  );
}
