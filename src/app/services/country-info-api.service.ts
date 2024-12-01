import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryInfoApiService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  // Methode für Informationen eines spezifischen Landes
  getCountryInfo(country: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/name/${country}`);
  }

  // Methode für alle Länder
  getAllCountries(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/all`);
  }
}
