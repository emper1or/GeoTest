
import { GeoLocation } from './types';

/**
 * Haversine formula to calculate distance between two coordinates in km
 * Handles anti-meridian wrapping for Russian Far East
 */
export const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  let dLon = (lon2 - lon1) * Math.PI / 180;
  
  // Anti-meridian wrap
  if (dLon > Math.PI) dLon -= 2 * Math.PI;
  if (dLon < -Math.PI) dLon += 2 * Math.PI;

  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

/**
 * Calculates distance from point to the closest point on a polyline or a single coordinate.
 * Uses linear interpolation for segment accuracy.
 */
export const calculateMinDistance = (clickedLat: number, clickedLng: number, target: GeoLocation): number => {
  let minDistance = calculateDistance(clickedLat, clickedLng, target.lat, target.lng);

  if (target.polyPoints && target.polyPoints.length > 1) {
    for (let i = 0; i < target.polyPoints.length - 1; i++) {
      const p1 = target.polyPoints[i];
      const p2 = target.polyPoints[i+1];
      
      // Interpolate points along the segment to find the closest one
      // 15 steps provide enough accuracy for classroom use (approx 10-50km resolution depending on length)
      const steps = 15;
      for (let step = 0; step <= steps; step++) {
        const t = step / steps;
        const interpLat = p1[0] + (p2[0] - p1[0]) * t;
        const interpLng = p1[1] + (p2[1] - p1[1]) * t;
        const d = calculateDistance(clickedLat, clickedLng, interpLat, interpLng);
        if (d < minDistance) minDistance = d;
      }
    }
  }
  return minDistance;
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
