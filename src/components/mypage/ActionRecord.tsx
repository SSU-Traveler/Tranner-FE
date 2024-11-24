import { useEffect, useState } from 'react';
import { myplanListElementType } from '../../types/mypage.type';
import MyPlanListElement from './MyPlanListElement';
import useBookmarkStore from '../../zustand/bookmarkStore';
import { useModal } from '../../hooks/useModal';
import { bookmarkType } from '../../types/bookmark.type';
import { getPhotoUrl } from '../../api/tripPlan.api';
import PlaceCardModal from './PlaceCardModal';
import { getPlaceDescription } from '../../api/place.api';

type CardType = bookmarkType & {
  photoUrl: string;
};

const ActionRecord = () => {
  const bookmarks = useBookmarkStore((state) => state.bookmarks);
  const { isModalOpen, closeModal, openModal } = useModal();
  const [card, setCard] = useState<CardType[]>([]);

  useEffect(() => {
    const loadCardInfo = async () => {
      const cardInfo = await Promise.all(
        bookmarks.map(async (element: bookmarkType) => {
          const response = await getPhotoUrl(element.placeId);
          if (response !== null) {
            return {
              placeId: element.placeId,
              name: element.name,
              addr: element.addr,
              photoUrl: response.photoUrl,
            };
          }
          return undefined; // 명시적으로 undefined를 반환
        })
      );

      // undefined 값 필터링
      const filteredCardInfo = cardInfo.filter((info): info is CardType => info !== undefined);

      // setCard에 필터링된 값 전달
      if (filteredCardInfo.length > 0) {
        setCard(filteredCardInfo);
      }
    };
    loadCardInfo();
  }, [bookmarks]);

  const openCardModal = async (element: CardType) => {
    const response = await getPlaceDescription(element.name);
    //placeCardModal에 props로 넘기기

    openModal(
      <PlaceCardModal
        placeId={element.placeId}
        imgPath={element.photoUrl}
        placeKorName={element.name}
        placeDescription={response}
      />
    );
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
      <div>찜한 장소</div>
      <div className="flex flex-wrap justify-start gap-x-[39px] gap-y-[20px]">
        {card.map((element) => (
          <div onClick={() => openCardModal(element)}>
            {element.photoUrl ? (
              <img src={element.photoUrl} alt="description" className="w-[150px] h-[150px] rounded-[8px]" />
            ) : (
              <div className="flex w-[150px] h-[150px] rounded-[8px] bg-gray-300 items-center justify-center text-[8px] text-white">
                이미지 없음
              </div>
            )}
            <p>{element.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActionRecord;
