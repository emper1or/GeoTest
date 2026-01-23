
import React, { useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Polyline, useMapEvents, Circle } from 'react-leaflet';
import L from 'leaflet';
import { GeoLocation, UserAnswer } from '../types';
import { calculateMinDistance } from '../utils';
import { MAP_CENTER, INITIAL_ZOOM } from '../constants';

const redMarkerIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="32" height="32"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'),
  iconSize: [28, 28],
  iconAnchor: [14, 28],
});

const blueMarkerIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3b82f6" width="32" height="32"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>'),
  iconSize: [28, 28],
  iconAnchor: [14, 28],
});

interface MapProps {
  currentQuestion: GeoLocation;
  onAnswer: (answer: UserAnswer) => void;
  lastAnswer: UserAnswer | null;
  isFeedbackMode: boolean;
}

const ClickHandler: React.FC<{ onClick: (lat: number, lng: number) => void, disabled: boolean }> = ({ onClick, disabled }) => {
  useMapEvents({
    click: (e) => {
      if (!disabled) {
        onClick(e.latlng.lat, e.latlng.lng);
      }
    },
  });
  return null;
};

const MapComponent: React.FC<MapProps> = ({ currentQuestion, onAnswer, lastAnswer, isFeedbackMode }) => {
  const handleClick = useCallback((lat: number, lng: number) => {
    const distance = calculateMinDistance(lat, lng, currentQuestion);
    const isCorrect = distance <= currentQuestion.toleranceKm;
    onAnswer({
      question: currentQuestion,
      clickedLat: lat,
      clickedLng: lng,
      distance,
      isCorrect,
    });
  }, [currentQuestion, onAnswer]);

  return (
    <div className="w-full h-full relative border-2 sm:border-4 border-gray-800 rounded-lg overflow-hidden shadow-lg">
      <MapContainer 
        center={MAP_CENTER} 
        zoom={INITIAL_ZOOM} 
        style={{ height: '100%', width: '100%' }}
        minZoom={INITIAL_ZOOM}
        maxZoom={INITIAL_ZOOM}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        dragging={true}
        className="z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <ClickHandler onClick={handleClick} disabled={isFeedbackMode} />

        {isFeedbackMode && lastAnswer && (
          <>
            <Marker position={[lastAnswer.clickedLat, lastAnswer.clickedLng]} icon={blueMarkerIcon} />
            <Marker position={[lastAnswer.question.lat, lastAnswer.question.lng]} icon={redMarkerIcon} />
            
            <Circle 
                center={[lastAnswer.question.lat, lastAnswer.question.lng]} 
                radius={lastAnswer.question.toleranceKm * 1000} 
                pathOptions={{ color: lastAnswer.isCorrect ? '#22c55e' : '#ef4444', fillColor: lastAnswer.isCorrect ? '#22c55e' : '#ef4444', fillOpacity: 0.15, weight: 1 }}
            />

            {lastAnswer.question.polyPoints && (
              <Polyline 
                positions={lastAnswer.question.polyPoints}
                pathOptions={{ color: '#ef4444', weight: 4, opacity: 0.4 }}
              />
            )}
            
            <Polyline 
              positions={[
                [lastAnswer.clickedLat, lastAnswer.clickedLng],
                [lastAnswer.question.lat, lastAnswer.question.lng]
              ]}
              pathOptions={{ color: '#64748b', weight: 1, dashArray: '4, 4' }}
            />
          </>
        )}
      </MapContainer>
      
      {/* Legend - Responsive */}
      <div className="absolute bottom-2 left-2 z-[1000] bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded shadow border border-gray-200 text-[8px] sm:text-[10px]">
          <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Ваш клик</span>
          </div>
          <div className="flex items-center gap-1.5 mb-0.5">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <span>Объект</span>
          </div>
          <p className="text-gray-400 mt-1">* Масштаб заблокирован</p>
      </div>
    </div>
  );
};

export default MapComponent;
