// import { useState } from 'react';
// import DOMPurify from 'dompurify';
// import clsx from 'clsx';
// import useBookmarkStore from '../../zustand/bookmarkStore';

// const buttonStyle =
//   'w-[200px] h-[50px] p-[10px] rounded-[5px] font-bold bg-button-basic text-white hover:bg-button-hover';

// interface Props {
//   placeId: string;
//   imgPath: string;
//   placeKorName: string;
//   placeEngName?: string;
//   placeAddress?: string;
//   placeDescription: string;
// }

// const PlaceCardModal = ({ placeId, imgPath, placeKorName, placeEngName, placeAddress, placeDescription }: Props) => {
//   const sanitizedHTML = DOMPurify.sanitize(placeDescription);

//   const [isBookmarked, setIsBookmarked] = useState<boolean>(true);

//   const addBookmarks = useBookmarkStore((state) => state.addBookmarks);
//   const removeBookmarks = useBookmarkStore((state) => state.removeBookmarks);

//   const handleAddToCart = () => {
//     //장바구니에 담겨있는지 여부 확인하고 코드 수정해야할듯
//   };

//   const handleAddToTripCard = () => {
//     //TODO: 기존 여행 계획에 추가하는 기능 구현
//   };

//   return (
//     <div className="w-[920px] h-[520px] rounded-[16px] flex gap-[20px] bg-white p-[20px]" id="modal-content">
//       <img src={imgPath} alt={placeKorName} className="w-[450px] h-[480px]" />
//       <div className="flex flex-col justify-between">
//         <section>
//           <section className="mb-[10px]">
//             <section className="flex justify-between">
//               <p className="text-[20px] font-bold">{placeKorName}</p>
//               {placeAddress &&
//                 (isBookmarked ? (
//                   <img
//                     src="/full-heart.svg"
//                     alt="찜한 후"
//                     className="hover:cursor-pointer"
//                     onClick={() => {
//                       const obj = {
//                         placeId: placeId,
//                         name: placeKorName,
//                         addr: placeAddress,
//                       };
//                       removeBookmarks(obj);
//                       setIsBookmarked(false);
//                     }}
//                   />
//                 ) : (
//                   <img
//                     src="/empty-heart.svg"
//                     alt="찜하기 전"
//                     className="hover:cursor-pointer"
//                     onClick={() => {
//                       const obj = {
//                         placeId: placeId,
//                         name: placeKorName,
//                         addr: placeAddress,
//                       };
//                       addBookmarks(obj);
//                       setIsBookmarked(true);
//                     }}
//                   />
//                 ))}
//             </section>
//             <p className="text-[14px] text-[#B2B9C0] mb-[4px]">{placeEngName}</p>
//             {placeAddress && <p className="text-[13px] text-[#495057]">{placeAddress}</p>}
//           </section>
//           <div
//             className={clsx(
//               placeAddress ? 'h-[350px]' : 'h-[370px]',
//               'w-[410px] overflow-y-auto overflow-x-hidden scrollbar-custom'
//             )}
//           >
//             <p className="w-[400px] text-[15.5px]" dangerouslySetInnerHTML={{ __html: sanitizedHTML }}></p>
//           </div>
//         </section>
//         <section className="flex gap-[10px]">
//           <button className={buttonStyle} onClick={handleAddToCart}>
//             장바구니에 담기
//           </button>
//           <button className={buttonStyle} onClick={handleAddToTripCard}>
//             기존 여행에 추가하기
//           </button>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default PlaceCardModal;
