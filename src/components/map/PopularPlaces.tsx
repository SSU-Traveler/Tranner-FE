import { useEffect, useRef, useState } from 'react';

export default function PopularPlaces() {
  const [map, setMap] = useState<Map | null>(null);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const newMap = new window.google.maps.Map(ref.current!, {
      center: { lat: 37.569227, lng: 126.9777256 },
      zoom: 16,
    });
    setMap(newMap);
  }, []);

  return <div ref={ref} />;
}
