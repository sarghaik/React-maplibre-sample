import React, { useRef, useEffect } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './Map.css';
import { IProps } from './types';

export default function Map({data, deliveredSeq}: IProps) {
  
  const mapContainer = useRef(null);
  const map = useRef(null as any);
  const lng = data?.[0]?.lng || 4.897070;
  const lat = data?.[0]?.lat || 52.377956;
  const zoom = 10;

  useEffect(() => {
    if (map.current) return;

    if (mapContainer.current)
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://tiles.stadiamaps.com/styles/osm_bright.json',
      center: [lng, lat],
      zoom: zoom
    })|| null;


    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    map.current && data.forEach((item, pos)=>{
      new maplibregl.Marker({ color: item.sequence_number<=deliveredSeq?'white': 'blue'})
        .setLngLat([item.lng, item.lat])
        .addTo(map.current);
    })
    

  }, [data, lat, lng]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}