import { useEffect, useState } from 'react';
import { myplanListElementType } from '../../types/mypage.type';
import MyPlanListElement from './MyPlanListElement';
import { deleteMyPlanObj, getMyPlanList } from '../../api/mypage.api';

const MyPlanList = () => {
  //사용자의 여행 계획 리스트 변수.
  const [planObjList, setPlanObjList] = useState<myplanListElementType[]>([]);

  //사용자의 여행 계획 리스트 초기화.
  useEffect(() => {
    const getData = async (): Promise<void> => {
      const response = await getMyPlanList(); //get
      console.log(response.schedules);
      setPlanObjList(response.schedules);
    };
    getData();
  }, []);

  const selectHandler = () => {
    //함수로 만들지 말고 그냥 link?
  };

  const deleteHandler = async (planId: number) => {
    //서버에서 여행 계획 삭제.
    const response = await deleteMyPlanObj(planId);
    //성공 시 planObjList update
    if (response == 'deleted success') {
      const resultList = planObjList.splice(planId - 1, 1);
      setPlanObjList(resultList);
    } else {
      console.log('객체 삭제 문제 생김');
    }
  };

  return (
    <div className="flex">
      <ul className="scroll overflow-auto h-[calc(100%-35px)]">
        {planObjList.map((element, index) => {
          return (
            <li key={index} onClick={selectHandler}>
              <MyPlanListElement planObj={element} deleteHandler={deleteHandler} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyPlanList;
