import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoLocationService {
  private geoApiUrl = 'https://geocode.maps.co/reverse'; // Beispiel-API für Geocoding

  constructor(private http: HttpClient) {}

  getGeoLocation(lat: number, lon: number): Observable<any> {
    return this.http.get<any>(`${this.geoApiUrl}?lat=${lat}&lon=${lon}`);
  }

  getCurrentPosition(): Promise<{ lat: number; lon: number }> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lon: position.coords.longitude,
            });
          },
          (error) => reject(error)
        );
      } else {
        reject(new Error('Geolocation ist nicht verfügbar.'));
      }
    });
  }
}
