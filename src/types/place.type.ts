export type PhotosType = {
  height: number;
  html_attributions: string[];
  photo_reference: string;
  width: number;
};

export type BasicPlaceInfo = {
  formatted_address?: string; // text search로 했을 때만 존재
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
    viewport: {
      northeast: {
        lat: number;
        lng: number;
      };
      southwest: {
        lat: number;
        lng: number;
      };
    };
  };
  name: string;
  rating: number;
};

export type SummaryOfPlaceInfo = BasicPlaceInfo & {
  description: string;
  photos: string[];
};

export type Place = BasicPlaceInfo & {
  business_status: string;
  icon: string;
  icon_background_color: string;
  icon_mask_base_uri: string;
  opening_hours?: {
    open_now: boolean;
  }; // text search로 했을 때만 존재
  photos: PhotosType[];
  place_id: string;
  plus_code: {
    compound_code: string;
    global_code: string;
  };
  reference: string;
  scope?: string; // nearby search로 했을 때만 존재
  types: string[];
  user_ratings_total: number;
  vicinity: string; // nearby search로 했을 때만 존재
};
