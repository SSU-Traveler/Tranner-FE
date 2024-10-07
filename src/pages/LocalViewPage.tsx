import MyPageCard from '../components/card/MyPageCard';
import RecommendCard from '../components/card/RecommendCard';
import SpotCard from '../components/card/SpotCard';
import TripPlanCard from '../components/card/TripPlanCard';
import CardModal from '../components/modal/CardModal';
import DetailCardModal from '../components/modal/DetailCardModal';
import OrderModifyCardModal from '../components/modal/OrderModifyCardModal';
import LocalCard from './../components/card/LocalCard';

export default function LocalViewPage() {
  return (
    <section className="bg-slate-300">
      <div>지역 조회 페이지</div>
      <div className="flex flex-col items-center gap-[10px] mb-[10px]">
        <LocalCard imgPath="/images/example-jeju.jpg" localName="제주 제주시" />
        <SpotCard imgPath="/images/example-gwanghwamun.jpg" spotName="광화문" />
        <RecommendCard
          imgPath="/images/성산일출봉.jpeg"
          placeName="성산일출봉"
          placeAddress="제주 서귀포시 성산읍 성산리"
        />
        <TripPlanCard
          imgPath="/images/성산일출봉.jpeg"
          placeName="성산일출봉"
          placeAddress="제주 서귀포시 성산읍 성산리"
        />
        <MyPageCard
          imgPath="/images/example-jeju.jpg"
          tripTitle="여행 1"
          tripStartDate={new Date('2024-09-17')}
          tripEndDate={new Date('2024-09-20')}
          numberOfPeople={3}
        />
        <CardModal
          imgPath="/images/성산일출봉.jpeg"
          placeKorName="성산일출봉"
          placeEngName="Seongsan Ilchulbong Tuff Cone Natural Reserve"
          placeAddress="제주 서귀포시 성산읍 성산리"
          placeDescription="설명 부분"
        />
        <DetailCardModal />
        <OrderModifyCardModal />
      </div>
    </section>
  );
}
