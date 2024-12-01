import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface DadJokeApiResponse {
  id: string;
  joke: string;
  status: number;
}

@Injectable({
  providedIn: 'root',
})
export class DadJokeApiService {
  private apiUrl = 'https://icanhazdadjoke.com/';

  constructor(private http: HttpClient) {}

  getRandomJoke(): Observable<DadJokeApiResponse> {
    const headers = new HttpHeaders({
      Accept: 'application/json',
      'User-Agent': 'PortfolioPage (https://github.com/username/repo)',
    });

    return this.http.get<DadJokeApiResponse>(this.apiUrl, { headers });
  }
}
