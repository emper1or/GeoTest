
import { GeoLocation } from './types';

/**
 * Haversine formula to calculate distance between two coordinates in km
 */
export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

/**
 * Calculates distance from point to nearest point on a polyline or a single coordinate
 */
export const calculateMinDistance = (clickedLat: number, clickedLng: number, target: GeoLocation): number => {
  if (target.polyPoints && target.polyPoints.length > 0) {
    let minDistance = Infinity;
    for (const [lat, lng] of target.polyPoints) {
      const dist = calculateDistance(clickedLat, clickedLng, lat, lng);
      if (dist < minDistance) minDistance = dist;
    }
    // Also check the primary center coordinate
    const centerDist = calculateDistance(clickedLat, clickedLng, target.lat, target.lng);
    return Math.min(minDistance, centerDist);
  }
  return calculateDistance(clickedLat, clickedLng, target.lat, target.lng);
};

/**
 * Standard array shuffle
 */
export const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
