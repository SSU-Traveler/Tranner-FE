import { useEffect, useState } from 'react';
import { tripDate, userPlaceType } from '../../types/tripPlan.type';
import { myplanListElementType } from '../../types/mypage.type';
import { getPhotoUrl } from '../../api/tripPlan.api';

interface Props {
  planObj: myplanListElementType;
  deleteHandler: (planId: number) => void;
}

const MyPlanListElement = ({ planObj, deleteHandler }: Props) => {
  //const photoUrl = getPhotoUrl(planObj.placeId);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotoUrl = async () => {
      try {
        const response = await getPhotoUrl(planObj.placeId); // API 요청
        // 응답에서 photoUrl을 추출
        if (response) setPhotoUrl(response.photoUrl);
      } catch (error) {
        console.error('Error fetching photo URL:', error);
      }
    };

    fetchPhotoUrl();
  }, []);

  return (
    <div className="mt-[20px] w-[800px] border p-[20px]">
      <div className="flex items-center justify-between">
        <div className="flex">
          {photoUrl ? (
            <img src={photoUrl} className="w-[300px] h-[200px] border-r"></img>
          ) : (
            <div className="flex items-center justify-center text-white w-[300px] h-[200px] bg-gray-200 rounded-[15px]">
              이미지 없음
            </div>
          )}
          <div className="flex flex-col gap-[5px] ml-[50px] pl-[50px] border-l">
            <p className="font-bold text-[35px]">{planObj.name}</p>
            <p className="text-[20px]">
              {planObj.startDate} ~ {planObj.endDate}
            </p>
            <p className="text-[20px]">{planObj.howmanypeople}명</p>
          </div>
        </div>
        <div onClick={() => deleteHandler(planObj.id)}>삭제</div>
      </div>
    </div>
  );
};

export default MyPlanListElement;
