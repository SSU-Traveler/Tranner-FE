import { useEffect, useState } from 'react';
import { placeDetailType, placeObjType } from '../../types/tripPlan.type';
import DetailCardModal from '../modal/DetailCardModal';
import { getPlacesDetail } from '../../api/tripPlan.api';
import useBookmarkStore from '../../zustand/bookmarkStore';

interface Props {
  placeObj: placeObjType;
  index: number;
  handlePlaceObjList: (index: number, placeObj: placeObjType) => void;
}

const PlaceElement = ({ placeObj, handlePlaceObjList, index }: Props) => {
  //장소 세부 정보 모달창 관련 변수
  const [isOpen, setIsOpen] = useState(false);
  const [placeDetailObj, setPlaceDetailObj] = useState<placeDetailType | undefined>();
  const [oldPlaceDetailObj, setOldPlaceDetailObj] = useState<placeDetailType[]>([]);

  const typeArr = ['food', 'landmark', 'point_of_interest', 'natural_feature'];

  const typeMapping = {
    food: '식당 및 카페',
    landmark: '관광 명소',
    point_of_interest: '즐길거리',
    natural_feature: '휴양지',
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  //oldPlaceDetailObj에 있는지 확인하는 함수.
  const checkInOld = async (cmpPlaceId: string) => {
    if (oldPlaceDetailObj === undefined || oldPlaceDetailObj.length === 0) return;
    const result: placeDetailType | undefined = oldPlaceDetailObj.find(
      (oldPlaceDetail) => oldPlaceDetail.placeId === cmpPlaceId
    );
    return result;
  };

  const getType = async (element: string[]) => {
    const result =
      typeArr.find((type: string) => {
        return element.some((detailTypes: string) => detailTypes === type);
      }) || '그 외';

    return typeMapping[result as keyof typeof typeMapping] || '그 외';
  };

  useEffect(() => {
    const updatePlaceDetail = async () => {
      let result: placeDetailType;
      //oldPlaceDetailObj에 있는지 확인하고 있으면 불러오기
      const oldObj = await checkInOld(placeObj.placeId);
      if (oldObj) {
        result = oldObj;
      } else {
        //없으면 값 불러오기~
        const response = await getPlacesDetail(placeObj.placeId);
        const type = response.types ? await getType(response.types) : '';
        result = {
          ...placeObj,
          rating: response.rating ? response.rating : '',
          type: type,
          openingHours: response.opening_hours ? response.opening_hours.weekday_text : [],
          phoneNumber: response.formatted_phone_number ? response.formatted_phone_number : '',
          googleMapsUrl: response.url ? response.url : '',
        };
        //oldPlaceDetailObj 추가.
        setOldPlaceDetailObj((prev) => [...prev, result]);
      }
      setPlaceDetailObj(result);
    };
    if (!isOpen) return;
    updatePlaceDetail();
  }, [isOpen]);

  //장소 이름 길이 조정
  const getPlaceName = (placeName: string) => {
    if (placeName.length > 9) {
      return placeName.slice(0, 8) + '...'; // 28번째 글자까지 잘라내고 '...' 추가
    }
    return placeName;
  };

  //주소 길이 조정
  const getAddress = (addr: string) => {
    if (addr.length > 14) {
      return addr.slice(0, 12) + '...'; // 28번째 글자까지 잘라내고 '...' 추가
    }
    return addr;
  };

  //북마크 관련 기능
  const addBookmarkList = useBookmarkStore((state) => state.addBookmarks);
  const removeBookmarkList = useBookmarkStore((state) => state.removeBookmarks);

  const addBookmarkElement = (placeObj: placeObjType) => {
    const bmkObj = { placeId: placeObj.placeId, name: placeObj.placeName, addr: placeObj.addr };
    //bookmark 리스트에 추가
    addBookmarkList(bmkObj);
    //element의 bookmark 여부 업데이트.
    placeObj.isBookmarked = !placeObj.isBookmarked;
  };

  const removeBookmarkElement = (placeObj: placeObjType) => {
    const bmkObj = { placeId: placeObj.placeId, name: placeObj.placeName, addr: placeObj.addr };
    //bookmark 리스트에서 삭제
    removeBookmarkList(bmkObj);
    //element의 bookmark 여부 업데이트.
    placeObj.isBookmarked = !placeObj.isBookmarked;
  };

  return (
    <div className="flex w-full h-[80px] items-center justify-between p-2 my-1">
      <div className="flex items-center">
        {placeObj.photoUrl ? (
          <img src={placeObj.photoUrl} alt="description" className="w-[60px] h-[60px] rounded-[8px]" />
        ) : (
          <div className="flex w-[60px] h-[60px] rounded-[8px] bg-gray-300 items-center justify-center text-[8px] text-white">
            이미지 없음
          </div>
        )}

        <div className="flex flex-col justify-center ml-3">
          <div onClick={openModal}>
            <p className="text-[16px] text-[#1B1D1F] font-bold">{getPlaceName(placeObj.placeName)}</p>
            <p className="text-[12px] text-[#495057]">{getAddress(placeObj.addr)}</p>
          </div>
          <div>
            {placeObj.isBookmarked ? (
              <img
                src="/full-heart.svg"
                onClick={() => removeBookmarkElement(placeObj)}
                alt="bookmark"
                className="w-[15px] h-[15] mt-[5px]"
              />
            ) : (
              <img
                src="/empty-heart.svg"
                onClick={() => addBookmarkElement(placeObj)}
                alt="bookmark"
                className="w-[15px] h-[15] mt-[5px]"
              />
            )}
          </div>
        </div>
      </div>
      <div
        onClick={() => handlePlaceObjList(index, placeObj)}
        className={`${
          placeObj.isInPlanList ? 'bg-[#D9D9D9]' : 'bg-button-basic'
        } flex items-center justify-center w-[20px] h-[90%] rounded-[5px] border text-white text-xs`}
      >
        {placeObj.isInPlanList ? '-' : '+'}
      </div>
      {isOpen && placeDetailObj !== undefined && (
        <DetailCardModal placeDetailObj={placeDetailObj} closeModal={closeModal} />
      )}
    </div>
  );
};

export default PlaceElement;
