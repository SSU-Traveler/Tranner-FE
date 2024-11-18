import { useEffect, useRef, useState } from 'react';
import SelectedSpot from './SelectedSpot';
import PlaceList from './PlaceList';
import Dropdown from '../common/Dropdown';
import { placeObjType, userPlaceType } from '../../types/tripPlan.type';
import { fetchPlacesText, fetchPlacesNearby, getPlacesInfo } from '../../api/tripPlan.api';
import { basketType } from '../../types/basket.type';
import useBookmarkStore from '../../zustand/bookmark';
import { bookmarkType } from '../../types/bookmark.type';

interface NewPlacesResponse {
  newPlaces: placeObjType[];
  nextPageToken?: string;
}

interface Props {
  elementObj: userPlaceType[];
  dateList: Date[];
  currentDateIndex: number;
  handleCurrentDateIndex: (date: number) => void;
  selectedSpots: basketType[];
  handleSelectedSpots: () => void;
  currSelectedSpot: basketType;
  handleCurrSelectedSpot: (index: number) => void;
  placeObjList: placeObjType[];
  handlePlaceObjList: (index: number, placeObj: placeObjType) => void;
  setPlaceObjList: React.Dispatch<React.SetStateAction<placeObjType[]>>;
}

const PlaceSearch = ({
  elementObj,
  dateList,
  currentDateIndex,
  handleCurrentDateIndex,
  selectedSpots,
  handleSelectedSpots,
  currSelectedSpot,
  handleCurrSelectedSpot,
  placeObjList,
  handlePlaceObjList,
  setPlaceObjList,
}: Props) => {
  const element = dateList.map((_, index) => {
    //index+1 '일차에 추가' 라는 string을 배열로 만들기
    return `${index + 1}일차에 추가`;
  });
  const [visible, setVisible] = useState(false);
  const dropdownStyle = 'flex w-full h-[35px] border text-white px-2 py-1 items-center font-bold';
  const dropdownAnimation = `scroll mt-[2px] w-full overflow-auto transition-all duration-500 ease-in-out ${
    visible ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
  }`;

  const bookmarks = useBookmarkStore((state) => state.bookmarks);

  //구글 api 관련 필요한 변수
  const pageSize = 20;
  const [nextPageToken, setNextPageToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const [searchType, setSearchType] = useState('select');
  const [searchTrigger, setSearchTrigger] = useState(0);

  const scrollRef = useRef<HTMLDivElement | null>(null); // 스크롤 요소 참조

  const newPlaceObjOnSearch = async (): Promise<NewPlacesResponse | undefined> => {
    const response = await fetchPlacesText(searchKey, currSelectedSpot, pageSize, nextPageToken); // 컴포넌트 마운트 시 첫 번째 데이터 가져오기
    if (response && response.placesDetail) {
      const newPlaces = response.placesDetail.map((element: any) => {
        const isInPlanList = elementObj.some(
          (cmpElement) =>
            cmpElement.addr === element.formattedAddress && cmpElement.placeName === element.displayName.text
        );
        //bookmarked 되어있는지 조회하는 logic
        // const isBookmarked = elementObj.some(
        //   (cmpElement) =>
        //     cmpElement.addr === element.formattedAddress && cmpElement.placeName === element.displayName.text
        // );
        const isBookmarked = bookmarks.some((bookmarkList) => bookmarkList.placeId === element.placeId);
        // 객체 생성
        return {
          isInPlanList: isInPlanList,
          isBookmarked: isBookmarked, // 기본값 또는 로직에 따라 설정
          placeId: element.placeId,
          placeName: element.name,
          addr: element.formatted_address,
          photoUrl: element.photoUrl,
          location: {
            latitude: element.geometry.location.lat,
            longitude: element.geometry.location.lng,
          },
        };
      });
      return { newPlaces: newPlaces, nextPageToken: response.nextPageToken };
    }
    return undefined;
  };

  const newPlaceObjOnSelect = async (): Promise<NewPlacesResponse | undefined> => {
    const response = await fetchPlacesNearby(currSelectedSpot, nextPageToken); // 컴포넌트 마운트 시 첫 번째 데이터 가져오기
    if (response && response.placesDetail) {
      const newPlaces = response.placesDetail.map((element: any) => {
        const isInPlanList = elementObj.some(
          (cmpElement) => cmpElement.addr === element.formatted_address && cmpElement.placeName === element.name
        );
        //bookmarked 되어있는지 조회하는 logic
        // const isBookmarked = elementObj.some(
        //   (cmpElement) =>
        //     cmpElement.addr === element.formattedAddress && cmpElement.placeName === element.displayName.text
        // );
        const isBookmarked = bookmarks.some((bookmarkList) => bookmarkList.placeId === element.placeId);
        // 객체 생성
        return {
          isInPlanList: isInPlanList,
          isBookmarked: isBookmarked, // 기본값 또는 로직에 따라 설정
          placeId: element.placeId,
          placeName: element.name,
          addr: element.formatted_address,
          photoUrl: element.photoUrl,
          location: {
            latitude: element.geometry.location.lat,
            longitude: element.geometry.location.lng,
          },
        };
      });
      return { newPlaces: newPlaces, nextPageToken: response.nextPageToken };
    }
    return undefined;
  };

  //검색 또는 select trigger에 의한 api 호출
  const fetchPlaces = async (shouldReplaceList: boolean = true) => {
    setLoading(true);
    let response: NewPlacesResponse | undefined;
    if (searchType === 'search') {
      response = await newPlaceObjOnSearch();
    } else {
      response = await newPlaceObjOnSelect();
    }
    if (response) {
      // 상태 업데이트: 새로운 장소 목록으로 업데이트
      if (shouldReplaceList) {
        setPlaceObjList(response.newPlaces);
      } else {
        setPlaceObjList((prevPlaces) => [...prevPlaces, ...response.newPlaces]);
      }
      setNextPageToken(response.nextPageToken ? response.nextPageToken : ''); // 다음 페이지 토큰 설정
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  const handleScroll = async () => {
    if (scrollRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;
      // 스크롤이 바닥에 도달했을 때 다음 페이지 데이터 요청
      if (scrollTop + clientHeight >= scrollHeight - 10 && nextPageToken && !loading) {
        fetchPlaces(false);
      }
    }
  };

  //스크롤로 인한 fetchData인 경우랑
  //검색 또는 장소 선택에 의한 fetchData인 경우를 나눠야 함.

  //trigger가 스크롤이면 placeObj를 그대로 둔 상태에서 그 뒤에 객체들을 더해야하고
  //trigger가 검색 또는 장소 선택이면 placeObj를 비우고 새로 받아와야 함.
  //그리고 fetchData가 자꾸 두번 실행되는 이유를 알아야 함.
  //일단 handleSrcoll에 접근하지는 않음. 그냥 두번 호출? 뭐지 대체

  //두번째 문제점: '길동'으로 검색 시 정말 '길동'만 나옴. 주변 장소가 검색이 되는 게 아님...문제..

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [nextPageToken, loading]); // nextPageToken과 loading 상태를 의존성으로 추가

  const handleShow = () => {
    setVisible(!visible);
  };

  const handleElementClick = (dateIndex: number) => {
    handleCurrentDateIndex(dateIndex);
    setVisible(false);
  };

  const handleSearch = () => {
    setSearchType('search');
    setSearchTrigger((prev) => prev + 1);
    setNextPageToken('');
    //fetchPlaces();
  };

  const handleSelectedSpotClick = (selectedIndex: number) => {
    handleCurrSelectedSpot(selectedIndex);
    setSearchType('select');
    setSearchTrigger((prev) => prev + 1);
    setNextPageToken('');
    //fetchPlaces();
    setSearchKey('');
  };

  const showBookmarks = async () => {
    //현재 bookmark 리스트.map
    //구글 api 호출하여 return newPlaceObject
    //newPlaceObjList 변수로 받기
    const newPlaceObjList = await Promise.all(
      bookmarks.map(async (element: bookmarkType) => {
        const response = await getPlacesInfo(element.placeId);
        const isInPlanList = elementObj.some(
          (cmpElement) => cmpElement.addr === response.formatted_address && cmpElement.placeName === response.name
        );
        const newPlaceObj = {
          isInPlanList: isInPlanList,
          isBookmarked: true, // 기본값 또는 로직에 따라 설정
          placeId: response.placeId,
          placeName: response.name,
          addr: response.formatted_address,
          photoUrl: response.photoUrl,
          location: {
            latitude: response.geometry.location.lat,
            longitude: response.geometry.location.lng,
          },
        };
        return newPlaceObj;
      })
    );
    //placeObjList를 업데이트
    setPlaceObjList(newPlaceObjList);
  };

  useEffect(() => {
    fetchPlaces();
  }, [searchType, searchTrigger]);

  return (
    <div className="w-[300px] p-3 h-[100vh]">
      <div className="relative">
        <div className="flex w-full h-[35px] bg-button-selected border text-white px-2 py-1 mt-3 justify-between items-center">
          <p className="font-bold">{currentDateIndex}일차에 추가</p>
          <p onClick={handleShow} className="">
            {visible ? <i className="xi-angle-up-min"></i> : <i className="xi-angle-down-min"></i>}
          </p>
        </div>
        <div className={'w-full flex flex-col items-center justify-center absolute z-20'}>
          {visible && (
            <div className={`${dropdownAnimation}`}>
              <Dropdown
                dropDownItemList={element}
                selectedIndex={currentDateIndex}
                dropdownStyle={dropdownStyle}
                handleElementClick={handleElementClick}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full h-[35px] items-center bg-white border border-[#D9D9D7] border-opacity-23 shadow-md justify-between p-1 mt-2">
        <input
          type="text"
          className="text-xs outline-none"
          placeholder="장소를 입력해주세요."
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <i className="xi-search" onClick={() => handleSearch()} />
      </div>
      <div
        className="flex w-full h-[20px] items-center justify-center itmes-center bg-[#495057] text-xs text-white mt-2"
        onClick={showBookmarks}
      >
        찜한 장소 보기
      </div>
      <SelectedSpot
        selectedSpots={selectedSpots}
        handleSelectedSpots={handleSelectedSpots}
        currSelectedSpot={currSelectedSpot}
        handleClick={handleSelectedSpotClick}
      />
      {/* placeObjList의 length가 0인 경우, 검색 결과 없음 컴포넌트? 띄우기. */}
      <PlaceList scrollRef={scrollRef} placeObjList={placeObjList} handlePlaceObjList={handlePlaceObjList} />
    </div>
  );
};

export default PlaceSearch;
