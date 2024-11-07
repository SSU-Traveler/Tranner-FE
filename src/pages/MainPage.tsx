import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { getPopularPlaces } from '../api/place.api';
import { CustomNextArrow, CustomPrevArrow } from '../components/arrow/CustomArrow';
import SpotCard from '../components/card/SpotCard';
import FilterButtonFormat from '../components/format/FilterButtonFormat';
import PlaceInput from '../components/input/PlaceInput';
import { useAlarm } from '../hooks/useAlarm';
import { useModal } from '../hooks/useModal';

const h1Style = 'font-bold text-[24px]';
const sectionStyle = 'my-[20px] flex flex-col gap-[10px]';

export default function MainPage() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const sliderRef = useRef<null | Slider>(null);
  const { needToLoginAlarm } = useAlarm();
  const { isModalOpen, closeModal } = useModal();

  useEffect(() => {
    getPopularPlaces();
  }, []);

  const playSlider = () => {
    if (sliderRef.current) sliderRef.current.slickPlay();
    setIsPlaying(true);
  };
  const pauseSlider = () => {
    if (sliderRef.current) sliderRef.current.slickPause();
    setIsPlaying(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  // 이 부분 커스텀 훅으로 만들기!!
  useEffect(() => {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    const handleOverlayClick = (e: MouseEvent) => {
      if (modal && !modalContent?.contains(e.target as Node)) closeModal();
    };

    if (isModalOpen) {
      modal?.addEventListener('click', handleOverlayClick);
    }

    return () => {
      modal?.removeEventListener('click', handleOverlayClick);
    };
  }, [isModalOpen, closeModal]);

  return (
    <>
      <section className={sectionStyle}>
        <h1 className={h1Style}>최근 인기 여행지</h1>
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px]">
          <Slider ref={sliderRef} {...settings}>
            {/* <Wrapper apiKey={GOGGLE_MAP_API_KEY} libraries={['places']}></Wrapper> */}
            <SpotCard
              imgPath="/images/example-gwanghwamun.jpg"
              spotName="광화문"
              spotEngName="Gwanghwamun"
              spotAddress="서울특별시 종로구 사직로 161"
              spotDescription="광화문(光化門)은 서울특별시 종로구의 조선왕조 법궁인 경복궁의 남쪽에 있는 정문으로, '임금의 큰 덕(德)이 온 나라를 비춘다'는 의미이다. 1395년에 세워졌으며, 2층 누각 구조로 되어 있다. 경복궁의 정전인 근정전으로 가기 위해 지나야 하는 문 3개 중에서 첫째로 마주하는 문이며, 둘째는 흥례문, 셋째는 근정문이다.
              광화문 앞에는 2023년에 복원한 월대가 자리잡고 있으며, 양쪽에는 한 쌍의 해태 조각상이 자리잡고 있다. 광화문의 석축부에는 세 개의 홍예문(虹霓門, 아치문)이 있다. 가운데 문은 임금이 다니던 문이고, 나머지 좌우의 문은 신하들이 다니던 문이었는데, 왼쪽 문은 무신이, 오른쪽 문은 문신이 출입했다. 광화문의 가운데 문 천장에는 주작이 그려져 있고, 왼쪽 문에는 거북이가, 오른쪽 문에는 천마가 그려져 있다."
              needToLoginAlarm={needToLoginAlarm}
            />
            <SpotCard
              imgPath="/images/example-lotteworld.jpg"
              spotName="롯데월드"
              spotEngName="Lotte World"
              spotAddress="서울특별시 송파구 올림픽로 240"
              spotDescription="롯데월드(영어: Lotte World)는 대한민국 서울특별시 송파구 올림픽로 240에 위치한 테마파크이다. 롯데그룹의 계열사인 호텔롯데 월드 사업부에서 운영한다.
              놀이시설은 실내의 롯데월드 어드벤처(Lotte World Adventure)와 야외의 매직아일랜드가 운영되고 있으며, 민속박물관, 아이스링크, 백화점, 마트, 호텔 등이 포함된다."
              needToLoginAlarm={needToLoginAlarm}
            />
            <SpotCard
              imgPath="/images/example-lotteworld.jpg"
              spotName="롯데월드"
              spotEngName="Lotte World"
              spotAddress="서울특별시 송파구 올림픽로 240"
              spotDescription="롯데월드(영어: Lotte World)는 대한민국 서울특별시 송파구 올림픽로 240에 위치한 테마파크이다. 롯데그룹의 계열사인 호텔롯데 월드 사업부에서 운영한다.
              놀이시설은 실내의 롯데월드 어드벤처(Lotte World Adventure)와 야외의 매직아일랜드가 운영되고 있으며, 민속박물관, 아이스링크, 백화점, 마트, 호텔 등이 포함된다."
              needToLoginAlarm={needToLoginAlarm}
            />

            <SpotCard
              imgPath="/images/example-gwanghwamun.jpg"
              spotName="광화문"
              spotEngName="Gwanghwamun"
              spotAddress="서울특별시 종로구 사직로 161"
              spotDescription="광화문(光化門)은 서울특별시 종로구의 조선왕조 법궁인 경복궁의 남쪽에 있는 정문으로, '임금의 큰 덕(德)이 온 나라를 비춘다'는 의미이다. 1395년에 세워졌으며, 2층 누각 구조로 되어 있다. 경복궁의 정전인 근정전으로 가기 위해 지나야 하는 문 3개 중에서 첫째로 마주하는 문이며, 둘째는 흥례문, 셋째는 근정문이다.
              광화문 앞에는 2023년에 복원한 월대가 자리잡고 있으며, 양쪽에는 한 쌍의 해태 조각상이 자리잡고 있다. 광화문의 석축부에는 세 개의 홍예문(虹霓門, 아치문)이 있다. 가운데 문은 임금이 다니던 문이고, 나머지 좌우의 문은 신하들이 다니던 문이었는데, 왼쪽 문은 무신이, 오른쪽 문은 문신이 출입했다. 광화문의 가운데 문 천장에는 주작이 그려져 있고, 왼쪽 문에는 거북이가, 오른쪽 문에는 천마가 그려져 있다."
              needToLoginAlarm={needToLoginAlarm}
            />
            <SpotCard
              imgPath="/images/example-lotteworld.jpg"
              spotName="롯데월드"
              spotEngName="Lotte World"
              spotAddress="서울특별시 송파구 올림픽로 240"
              spotDescription="롯데월드(영어: Lotte World)는 대한민국 서울특별시 송파구 올림픽로 240에 위치한 테마파크이다. 롯데그룹의 계열사인 호텔롯데 월드 사업부에서 운영한다.
              놀이시설은 실내의 롯데월드 어드벤처(Lotte World Adventure)와 야외의 매직아일랜드가 운영되고 있으며, 민속박물관, 아이스링크, 백화점, 마트, 호텔 등이 포함된다."
              needToLoginAlarm={needToLoginAlarm}
            />

            <SpotCard
              imgPath="/images/example-gwanghwamun.jpg"
              spotName="광화문"
              spotEngName="Gwanghwamun"
              spotAddress="서울특별시 종로구 사직로 161"
              spotDescription="광화문(光化門)은 서울특별시 종로구의 조선왕조 법궁인 경복궁의 남쪽에 있는 정문으로, '임금의 큰 덕(德)이 온 나라를 비춘다'는 의미이다. 1395년에 세워졌으며, 2층 누각 구조로 되어 있다. 경복궁의 정전인 근정전으로 가기 위해 지나야 하는 문 3개 중에서 첫째로 마주하는 문이며, 둘째는 흥례문, 셋째는 근정문이다."
              needToLoginAlarm={needToLoginAlarm}
            />
            <SpotCard
              imgPath="/images/example-gwanghwamun.jpg"
              spotName="광화문"
              spotEngName="Gwanghwamun"
              spotAddress="서울특별시 종로구 사직로 161"
              spotDescription="              광화문 앞에는 2023년에 복원한 월대가 자리잡고 있으며, 양쪽에는 한 쌍의 해태 조각상이 자리잡고 있다. 광화문의 석축부에는 세 개의 홍예문(虹霓門, 아치문)이 있다. 가운데 문은 임금이 다니던 문이고, 나머지 좌우의 문은 신하들이 다니던 문이었는데, 왼쪽 문은 무신이, 오른쪽 문은 문신이 출입했다. 광화문의 가운데 문 천장에는 주작이 그려져 있고, 왼쪽 문에는 거북이가, 오른쪽 문에는 천마가 그려져 있다."
              needToLoginAlarm={needToLoginAlarm}
            />
            <SpotCard
              imgPath="/images/example-lotteworld.jpg"
              spotName="롯데월드"
              spotEngName="Lotte World"
              spotAddress="서울특별시 송파구 올림픽로 240"
              spotDescription="롯데월드(영어: Lotte World)는 대한민국 서울특별시 송파구 올림픽로 240에 위치한 테마파크이다. 롯데그룹의 계열사인 호텔롯데 월드 사업부에서 운영한다.
              놀이시설은 실내의 롯데월드 어드벤처(Lotte World Adventure)와 야외의 매직아일랜드가 운영되고 있으며, 민속박물관, 아이스링크, 백화점, 마트, 호텔 등이 포함된다."
              needToLoginAlarm={needToLoginAlarm}
            />
          </Slider>
          <div className="mt-[30px] flex gap-[5px] justify-center">
            {isPlaying ? (
              <button onClick={pauseSlider}>
                <img src="/pause-button.svg" alt="pause" />
              </button>
            ) : (
              <button onClick={playSlider}>
                <img src="/play-button.svg" alt="play" />
              </button>
            )}
          </div>
        </div>
      </section>
      <section className={sectionStyle}>
        <h1 className={h1Style}>여행지 찾기</h1>
        <div className="flex justify-center">
          <PlaceInput searchObj="여행지" />
        </div>
        <div className="border border-[#B2B9C0] p-[20px] rounded-[8px]">
          <FilterButtonFormat />
          <div className="flex flex-wrap justify-between gap-[20px]">
            <SpotCard
              imgPath="/images/example-lotteworld.jpg"
              spotName="롯데월드"
              spotEngName="Lotte World"
              spotAddress="서울특별시 송파구 올림픽로 240"
              spotDescription="롯데월드(영어: Lotte World)는 대한민국 서울특별시 송파구 올림픽로 240에 위치한 테마파크이다. 롯데그룹의 계열사인 호텔롯데 월드 사업부에서 운영한다.
              놀이시설은 실내의 롯데월드 어드벤처(Lotte World Adventure)와 야외의 매직아일랜드가 운영되고 있으며, 민속박물관, 아이스링크, 백화점, 마트, 호텔 등이 포함된다."
              needToLoginAlarm={needToLoginAlarm}
            />
            <SpotCard
              imgPath="/images/example-lotteworld.jpg"
              spotName="롯데월드"
              spotEngName="Lotte World"
              spotAddress="서울특별시 송파구 올림픽로 240"
              spotDescription="롯데월드(영어: Lotte World)는 대한민국 서울특별시 송파구 올림픽로 240에 위치한 테마파크이다. 롯데그룹의 계열사인 호텔롯데 월드 사업부에서 운영한다.
              놀이시설은 실내의 롯데월드 어드벤처(Lotte World Adventure)와 야외의 매직아일랜드가 운영되고 있으며, 민속박물관, 아이스링크, 백화점, 마트, 호텔 등이 포함된다."
              needToLoginAlarm={needToLoginAlarm}
            />
            <SpotCard
              imgPath="/images/example-lotteworld.jpg"
              spotName="롯데월드"
              spotEngName="Lotte World"
              spotAddress="서울특별시 송파구 올림픽로 240"
              spotDescription="롯데월드(영어: Lotte World)는 대한민국 서울특별시 송파구 올림픽로 240에 위치한 테마파크이다. 롯데그룹의 계열사인 호텔롯데 월드 사업부에서 운영한다.
              놀이시설은 실내의 롯데월드 어드벤처(Lotte World Adventure)와 야외의 매직아일랜드가 운영되고 있으며, 민속박물관, 아이스링크, 백화점, 마트, 호텔 등이 포함된다."
              needToLoginAlarm={needToLoginAlarm}
            />
            <SpotCard
              imgPath="/images/example-lotteworld.jpg"
              spotName="롯데월드"
              spotEngName="Lotte World"
              spotAddress="서울특별시 송파구 올림픽로 240"
              spotDescription="롯데월드(영어: Lotte World)는 대한민국 서울특별시 송파구 올림픽로 240에 위치한 테마파크이다. 롯데그룹의 계열사인 호텔롯데 월드 사업부에서 운영한다.
              놀이시설은 실내의 롯데월드 어드벤처(Lotte World Adventure)와 야외의 매직아일랜드가 운영되고 있으며, 민속박물관, 아이스링크, 백화점, 마트, 호텔 등이 포함된다."
              needToLoginAlarm={needToLoginAlarm}
            />
            <SpotCard
              imgPath="/images/example-lotteworld.jpg"
              spotName="롯데월드"
              spotEngName="Lotte World"
              spotAddress="서울특별시 송파구 올림픽로 240"
              spotDescription="롯데월드(영어: Lotte World)는 대한민국 서울특별시 송파구 올림픽로 240에 위치한 테마파크이다. 롯데그룹의 계열사인 호텔롯데 월드 사업부에서 운영한다.
              놀이시설은 실내의 롯데월드 어드벤처(Lotte World Adventure)와 야외의 매직아일랜드가 운영되고 있으며, 민속박물관, 아이스링크, 백화점, 마트, 호텔 등이 포함된다."
              needToLoginAlarm={needToLoginAlarm}
            />
            <SpotCard
              imgPath="/images/example-lotteworld.jpg"
              spotName="롯데월드"
              spotEngName="Lotte World"
              spotAddress="서울특별시 송파구 올림픽로 240"
              spotDescription="롯데월드(영어: Lotte World)는 대한민국 서울특별시 송파구 올림픽로 240에 위치한 테마파크이다. 롯데그룹의 계열사인 호텔롯데 월드 사업부에서 운영한다.
              놀이시설은 실내의 롯데월드 어드벤처(Lotte World Adventure)와 야외의 매직아일랜드가 운영되고 있으며, 민속박물관, 아이스링크, 백화점, 마트, 호텔 등이 포함된다."
              needToLoginAlarm={needToLoginAlarm}
            />
          </div>
        </div>
      </section>
    </>
  );
}
