import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface AareApiResponse {
  aare: number;
  aare_prec: number;
  text: string;
  text_short: string;
  time: number;
  name: string;
  longname: string;
}

@Injectable({
  providedIn: 'root',
})
export class AareApiService {
  private apiUrl = 'https://aareguru.existenz.ch/v2018/today';
  private appIdentifier = 'my.app.ch';
  private appVersion = '1.0.42';

  constructor(private http: HttpClient) {}

  getAareData(city: string): Observable<AareApiResponse> {
    const params = `?city=${city}&app=${this.appIdentifier}&version=${this.appVersion}`;
    return this.http.get<AareApiResponse>(`${this.apiUrl}${params}`);
  }
}
