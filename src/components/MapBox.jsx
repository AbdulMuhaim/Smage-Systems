import { useEffect } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

const locations = [
  { latitude: 10.0159, longitude: 76.3419, name: 'Kochi' },
];

const MapComponent = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibXVoYWltMjUiLCJhIjoiY2xua2dyMm5oMGwxYjJycnp1anFlaGQ2ZCJ9.YmYBTuY9ozBqujUmiUa-Kw';

    const map = new mapboxgl.Map({
      container: 'map-container',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [locations[0].longitude, locations[0].latitude],
      zoom: 11, 
    });

    locations.forEach(location => {
      new mapboxgl.Marker({ color: 'red' }).setLngLat([location.longitude, location.latitude]).addTo(map);
    });

    return () => map.remove();
  }, [locations]);

  return (
    <div className="relative w-full">
      <div id="map-container" className="sm:h-[50vh] lg:h-64 xl:h-80 h-[35vh]"></div>
    </div>
  );
};

const YourComponent = () => {
  return (
    <div className="flex justify-center items-center p-2 lg:p-6">
      <MapComponent locations={locations} />
    </div>
  );
};

export default YourComponent;