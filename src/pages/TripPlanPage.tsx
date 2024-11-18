import CalendarModal from '../components/modal/CalendarModal';
import Map from '../components/tripPlan/Map';
import PlaceSearch from '../components/tripPlan/PlaceSearch';
import TripPlanInfo from '../components/tripPlan/TripPlanInfo';
import { useState } from 'react';
import { placeObjType, userPlaceType } from '../types/tripPlan.type';
import useBasketStore from '../zustand/basketStore';

const TripPlanPage = () => {
  //계획 이름
  const [planName, setPlanName] = useState('계획 이름 입력');
  //인원수
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  //여행 계획 날짜
  const [tripDate, setTripDate] = useState({
    tripStartDate: '0000-00-00',
    tripEndDate: '0000-00-00',
  });
  //모달창 열림 여부
  const [isOpen, setIsOpen] = useState(true);
  //n일차에 추가 부분에서 현재 선택된 일차
  const [currentDateIndex, setCurrentDateIndex] = useState(1);

  //사용자가 장바구니에 담은 요소들
  const selectedSpots = useBasketStore((state) => state.basket);
  //사용자가 장바구니의 요소들 중 현재 선택한 요소
  const [currSelectedSpot, setCurrSelectedSpot] = useState(selectedSpots[0]);
  //여행 계획 부분에서의 장소 객체 배열
  const [elementObj, setElementObj] = useState<userPlaceType[]>([]);

  //검색 결과로 출력될 장소 객체 배열
  const [placeObjList, setPlaceObjList] = useState<placeObjType[]>([]);

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

  const handleDelete = (elementToDelete: userPlaceType) => {
    setPlaceObjList((prev) =>
      prev.map((item) =>
        item.addr === elementToDelete.addr && item.placeName === elementToDelete.placeName
          ? { ...item, isInPlanList: !item.isInPlanList }
          : item
      )
    );
    deleteElement(elementToDelete);
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
  const handleCurrentDateIndex = (dateIndex: number) => {
    setCurrentDateIndex(dateIndex);
  };

  const handleSelectedSpots = () => {};
  const handleCurrSelectedSpot = (index: number) => {
    setCurrSelectedSpot(selectedSpots[index]);
  };

  const handlePlaceObjList = (index: number, placeObject: placeObjType) => {
    setPlaceObjList((prev) =>
      prev.map((item, i) => (i === index ? { ...item, isInPlanList: !item.isInPlanList } : item))
    );

    if (placeObject.isInPlanList) {
      //elementObj에서 제거
      const delObj: userPlaceType | undefined = elementObj.find((element) => {
        return element.addr === placeObject.addr && element.placeName === placeObject.placeName;
      });
      if (delObj !== undefined) {
        deleteElement(delObj);
      }
    } else {
      //elementObj에 추가.
      const prevElements = elementObj.filter((element) => element.daySequence < currentDateIndex);
      const filteredElements = elementObj.filter((element) => element.daySequence === currentDateIndex);
      const nextElements = elementObj.filter((element) => element.daySequence > currentDateIndex);

      const newObj = {
        daySequence: currentDateIndex,
        locationSequence: filteredElements.length + 1,
        placeId: placeObject.placeId,
        placeName: placeObject.placeName, //name 장소 이름
        addr: placeObject.addr,
        photoUrl: placeObject.photoUrl,
        location: placeObject.location,
      };
      const resultElement = [...prevElements, ...filteredElements, newObj, ...nextElements];

      setElementObj(resultElement);
    }
  };

  return (
    <div className="flex">
      <TripPlanInfo
        planName={planName}
        handlePlanName={handlePlanName}
        numberOfPeople={numberOfPeople}
        handleNumofPeople={handleNumofPeople}
        tripDate={tripDate}
        openModal={openModal}
        elementObj={elementObj}
        handleDelete={handleDelete} //하,,,이거 수정해서 재사용하도록. placeElement에서도 사용
        dateList={dateList}
      />
      {isOpen && <CalendarModal closeModal={closeModal} handleTripDate={setTripDate} />}
      <PlaceSearch
        elementObj={elementObj}
        dateList={dateList}
        currentDateIndex={currentDateIndex}
        handleCurrentDateIndex={handleCurrentDateIndex}
        selectedSpots={selectedSpots}
        handleSelectedSpots={handleSelectedSpots}
        currSelectedSpot={currSelectedSpot}
        handleCurrSelectedSpot={handleCurrSelectedSpot}
        placeObjList={placeObjList}
        handlePlaceObjList={handlePlaceObjList}
        setPlaceObjList={setPlaceObjList}
      />
      <Map elementObj={elementObj} currSelectedSpot={currSelectedSpot} />
    </div>
  );
};

export default TripPlanPage;
