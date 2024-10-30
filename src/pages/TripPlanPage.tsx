import CalendarModal from '../components/modal/CalendarModal';
import Map from '../components/tripPlan/Map';
import PlaceSearch from '../components/tripPlan/PlaceSearch';
import TripPlanInfo from '../components/tripPlan/TripPlanInfo';
import { useCallback, useEffect, useRef, useState } from 'react';

const key = import.meta.env.VITE_GOOGLE_PLACE_API;

const TripPlanPage = () => {
  const [planName, setPlanName] = useState('게획 이름 입력');
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tripDate, setTripDate] = useState({
    tripStartDate: '0000-00-00',
    tripEndDate: '0000-00-00',
  });
  const [isOpen, setIsOpen] = useState(true);
  const [elementObj, setElementObj] = useState([
    {
      daySequence: 1,
      locationSequence: 1,
      placeName: '1', //name 장소 이름
      addr: '1', //formattedAddress  주소
    },
  ]);

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
      />
      {isOpen && <CalendarModal isOpen={isOpen} onClose={closeModal} />}
      <PlaceSearch />
      <Map ref={mapRef} />
    </div>
  );
};

export default TripPlanPage;
