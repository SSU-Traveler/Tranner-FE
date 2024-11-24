import { useState } from 'react';
import MyPlanList from '../components/mypage/MyPlanList';
import useUserDataStore from '../zustand/userDataStore';
import ActionRecord from '../components/mypage/ActionRecord';

const MyPage = () => {
  //const {nickname} = 전역상태~~
  const [showType, setShowType] = useState('tripPlanList');
  const { nickname } = useUserDataStore();

  return (
    <div className="h-[100vh]">
      <section
        style={{ backgroundImage: `url("images/weather/sunny-day.jpg")` }}
        className="absolute top-0 left-0 w-full h-[400px] bg-cover bg-center flex justify-center items-center"
      >
        <div className="absolute top-[300px] flex flex-col items-center">
          <div className="w-[200px] h-[200px] border rounded-[100%] bg-white"></div>
          <p className="font-bold text-[25px]">{nickname}</p>
          <p className="text-xs">프로필 설정</p>
        </div>
      </section>
      <section className="absolute top-[600px] ">
        <div className="flex gap-[20px]">
          <p onClick={() => setShowType('tripPlanList')}>내 여행 계획표</p>
          <p onClick={() => setShowType('myActionRecord')}>내 활동 기록</p>
        </div>
        <div>{showType === 'tripPlanList' ? <MyPlanList /> : <ActionRecord />}</div>
      </section>
    </div>
  );
};
export default MyPage;
