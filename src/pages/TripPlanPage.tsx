import CalendarModal from '../components/modal/CalendarModal';
import Map from '../components/tripPlan/Map';
import PlaceSearch from '../components/tripPlan/PlaceSearch';
import TripPlanInfo from '../components/tripPlan/TripPlanInfo';
import { useCallback, useEffect, useRef, useState } from 'react';
import { userPlaceType } from '../types/tripPlan.type';

const key = import.meta.env.VITE_GOOGLE_PLACE_API;

const TripPlanPage = () => {
  const [planName, setPlanName] = useState('계획 이름 입력');
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tripDate, setTripDate] = useState({
    tripStartDate: '0000-00-00',
    tripEndDate: '0000-00-00',
  });
  const [isOpen, setIsOpen] = useState(true);
  const [currentDate, setCurrentDate] = useState(1);
  const [elementObj, setElementObj] = useState([
    {
      daySequence: 1,
      locationSequence: 1,
      placeName: '성산 일출봉', //name 장소 이름
      addr: '대한민국 서귀포시 성산 일출봉', //formattedAddress  주소
    },
    {
      daySequence: 1,
      locationSequence: 2,
      placeName: '우도', //name 장소 이름
      addr: '대한민국 제주특별자치도 우도', //formattedAddress  주소
    },
    {
      daySequence: 1,
      locationSequence: 3,
      placeName: '순풍해장국 길이 테스트용임', //name 장소 이름
      addr: '대한민국 제주특별자치도 서귀포시 순풍해장국', //formattedAddress  주소
    },
    {
      daySequence: 2,
      locationSequence: 1,
      placeName: '성산 일출봉', //name 장소 이름
      addr: '대한민국 서귀포시 성산 일출봉', //formattedAddress  주소
    },
    {
      daySequence: 2,
      locationSequence: 2,
      placeName: '우도', //name 장소 이름
      addr: '대한민국 제주특별자치도 우도', //formattedAddress  주소
    },
    {
      daySequence: 2,
      locationSequence: 3,
      placeName: '순풍해장국 길이 테스트용임', //name 장소 이름
      addr: '대한민국 제주특별자치도 서귀포시 순풍해장국', //formattedAddress  주소
    },
    {
      daySequence: 3,
      locationSequence: 1,
      placeName: '성산 일출봉', //name 장소 이름
      addr: '대한민국 서귀포시 성산 일출봉', //formattedAddress  주소
    },
    {
      daySequence: 3,
      locationSequence: 2,
      placeName: '우도', //name 장소 이름
      addr: '대한민국 제주특별자치도 우도', //formattedAddress  주소
    },
    {
      daySequence: 3,
      locationSequence: 3,
      placeName: '순풍해장국 길이 테스트용임', //name 장소 이름
      addr: '대한민국 제주특별자치도 서귀포시 순풍해장국', //formattedAddress  주소
    },
  ]);

  //날짜 변경 관련
  const getDateRange = (tripStartDate: string, tripEndDate: string) => {
    const start = new Date(tripStartDate);
    const end = new Date(tripEndDate);

    // 두 날짜의 차이를 계산 (1일을 더하기 위해 +1)
    const dateArray = [];
    const currentDate = new Date(start);

    while (currentDate <= end) {
      dateArray.push(new Date(currentDate)); // 날짜를 배열에 추가
      currentDate.setDate(currentDate.getDate() + 1); // 하루씩 증가
    }

    return dateArray; // 날짜 배열 반환
  };

  const dateList = getDateRange(tripDate.tripStartDate, tripDate.tripEndDate);

  //지도 관련
  const mapRef = useRef<HTMLDivElement | null>(null);

  const initMap = useCallback(() => {
    if (mapRef.current) {
      new window.google.maps.Map(mapRef.current, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    }
  }, [mapRef]);

  useEffect(() => {
    // 구글 맵 API 스크립트를 동적으로 추가
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`; // 자신의 API 키로 변경
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();

    // Clean up function to remove the script
    return () => {
      const existingScript = document.querySelector(`script[src="https://maps.googleapis.com/maps/api/js?key=${key}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [initMap]);

  useEffect(() => {});

  //planInfo 부분 관련
  const handlePlanName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlanName(e.target.value);
  };

  const handleNumofPeople = (type: string) => {
    if (type === '-') {
      setNumberOfPeople(numberOfPeople - 1);
    } else {
      setNumberOfPeople(numberOfPeople + 1);
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const deleteElement = (elementToDelete: userPlaceType) => {
    setElementObj((prevElements) => {
      const { daySequence } = elementToDelete;

      // 요소 삭제
      const filteredElements = prevElements.filter(
        (element) =>
          element.daySequence !== elementToDelete.daySequence ||
          element.locationSequence !== elementToDelete.locationSequence
      );

      // 해당 daySequence에 해당하는 요소 재정렬
      const updatedElements = filteredElements
        .filter((element) => element.daySequence === daySequence)
        .map((element, index) => ({
          ...element,
          locationSequence: index + 1, // locationSequence 재정렬
        }));

      // 나머지 요소들
      const otherElements = filteredElements.filter((element) => element.daySequence !== daySequence);

      // 모든 요소를 합친 후, daySequence와 locationSequence에 따라 정렬
      const combinedElements = [...otherElements, ...updatedElements];

      return combinedElements.sort((a, b) => {
        if (a.daySequence === b.daySequence) {
          return a.locationSequence - b.locationSequence; // daySequence가 같을 경우 locationSequence로 정렬
        }
        return a.daySequence - b.daySequence; // daySequence로 정렬
      });
    });
  };

  //PlaceSearch 관련
  const handleCurrentDate = (date: number) => {
    setCurrentDate(date);
  };

  return (
    <div className="flex">
      <TripPlanInfo
        planName={planName}
        handlePlanName={handlePlanName}
        numberOfPeople={numberOfPeople}
        handleNumofPeople={handleNumofPeople}
        tripDate={tripDate}
        isOpen={isOpen}
        openModal={openModal}
        elementObj={elementObj}
        deleteElement={deleteElement}
        dateList={dateList}
      />
      {isOpen && <CalendarModal closeModal={closeModal} handleTripDate={setTripDate} />}
      <PlaceSearch dateList={dateList} currentDate={currentDate} handleCurrentDate={handleCurrentDate} />
      <Map ref={mapRef} />
    </div>
  );
};

export default TripPlanPage;
