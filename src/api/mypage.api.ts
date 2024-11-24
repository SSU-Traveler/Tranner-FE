import { apiGet } from '../zustand/tokenStore';

export const getMyPlanList = async () => {
  const url = '/api/member/mypage';
  const response = await apiGet(url);
  return response;
};

export const deleteMyPlanObj = async (planId: number) => {
  const url = `/api/member/deletePlan?id=${planId}`;
  const response = await apiGet(url);
  return response;
};
