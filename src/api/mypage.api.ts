import { apiGet } from '../zustand/tokenStore';

export const getMyPlanList = async (navigate: any) => {
  const url = '/api/member/mypage';
  const response = await apiGet(url, navigate);
  return response;
};

export const deleteMyPlanObj = async (planId: number, navigate: any) => {
  const url = `/api/member/deletePlan?id=${planId}`;
  const response = await apiGet(url, navigate);
  return response;
};
