//객체에 빈 값이 있는지 확인
export const isEmpty = (object: {}) => !Object.values(object).every((x) => x !== null && x !== '');
//하나라도 null값이면 empty(true) 반환
