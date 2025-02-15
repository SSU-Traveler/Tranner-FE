export type myplanListElementType = {
  placeId: string;
  id: number;
  name: string;
  howmanypeople: number;
  startDate: string;
  endDate: string;
};

export type placeCardType = {
  imgPath: string;
  placeKorName: string;
  placeEngName?: string;
  placeAddress?: string;
  placeDescription: string;
};
