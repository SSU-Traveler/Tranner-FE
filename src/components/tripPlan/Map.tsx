import { useCallback, useEffect, useRef } from 'react';
import { basketType } from '../../types/basket.type';
import { userPlaceType } from '../../types/tripPlan.type';

const key = import.meta.env.VITE_GOOGLE_API_KEY;

interface Props {
  elementObj: userPlaceType[];
  currSelectedSpot: basketType;
}
const Map = ({ elementObj, currSelectedSpot }: Props) => {
  //지도 관련
  const mapRef = useRef<HTMLDivElement | null>(null);

  const initMap = useCallback(async () => {
    const pinColorArr = [
      '#E60100',
      '#FF8B03',
      '#FFF000',
      '#028221',
      '#014BFE',
      '#000080',
      '#790589',
      '#FF9292',
      '#FFC092',
      '#FFF2AA',
      '#ACEA92',
      '#A8E1EC',
      '#92A0E4',
      '#C592E5',
    ];

    if (mapRef.current) {
      // 지도 초기화
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: currSelectedSpot.location.latitude, lng: currSelectedSpot.location.longitude },
        zoom: 14,
        mapId: 'DEMO_MAP_ID',
      });

      // AdvancedMarkerElement와 PinElement 가져오기
      const { PinElement, AdvancedMarkerElement } = await window.google.maps.importLibrary('marker');

      let i = 0;
      // 현재 선택된 장소에 대한 마커 추가
      const currSpotPosition = new google.maps.LatLng(
        currSelectedSpot.location.latitude,
        currSelectedSpot.location.longitude
      );
      const currSpotMarker = new AdvancedMarkerElement({
        id: i,
        map: map,
        position: currSpotPosition,
      });

      // InfoWindow 추가
      const infoWindow = new window.google.maps.InfoWindow({
        content: `<div><strong>${currSelectedSpot.spot}</strong></div>`,
      });

      // 마커 클릭 시 InfoWindow 열기
      currSpotMarker.addListener('click', () => {
        infoWindow.open(map, currSpotMarker);
      });

      // elementObj 배열을 반복하여 마커 추가
      elementObj.forEach((element) => {
        i += 1;
        const pinElement = new PinElement({
          scale: 1.2,
          glyph: element.locationSequence.toString(),
          glyphColor: 'white',
          background: pinColorArr[element.daySequence - 1],
          borderColor: pinColorArr[element.daySequence - 1],
        });

        const position = new google.maps.LatLng(element.location.latitude, element.location.longitude);

        const marker = new AdvancedMarkerElement({
          id: i,
          map: map,
          position: position,
          content: pinElement.element, // PinElement의 콘텐츠
        });

        const elementInfoWindow = new window.google.maps.InfoWindow({
          content: `<div><strong>${element.placeName || 'Element'}</strong></div>`,
        });

        // 각 마커 클릭 시 InfoWindow 열기
        marker.addListener('click', () => {
          elementInfoWindow.open(map, marker);
        });
      });
    }
  }, [mapRef, currSelectedSpot, elementObj]);

  useEffect(() => {
    // 구글 맵 API 스크립트를 동적으로 추가
    const loadGoogleMapsScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${key}`; // 자신의 API 키로 변경
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    };

    loadGoogleMapsScript();

    // Clean up function to remove the script
    return () => {
      const existingScript = document.querySelector(`script[src="https://maps.googleapis.com/maps/api/js?key=${key}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [initMap, currSelectedSpot, elementObj]);

  return <div ref={mapRef} className="flex-grow h-auto " />;
};

export default Map;
