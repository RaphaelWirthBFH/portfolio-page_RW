import { Component, ElementRef, OnInit } from '@angular/core';
import { AareApiService } from '../../services/aare-api.service';
import { DadJokeApiService } from '../../services/dad-joke-api.service';
import { CountryInfoApiService } from '../../services/country-info-api.service';
import { GeoLocationService } from '../../services/geo-location.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-api.component.html',
  styleUrls: ['./portfolio-api.component.scss'],
})
export class PortfolioApiComponent implements OnInit {
  aareData: any;
  dadJoke: string | null = null;
  countryInfo: any | null = null;
  errorMessage: string | null = null;

  constructor(
    private el: ElementRef,
    private aareApiService: AareApiService,
    private dadJokeApiService: DadJokeApiService,
    private countryInfoApiService: CountryInfoApiService,
    private geoLocationService: GeoLocationService
  ) {}

  ngOnInit(): void {
    // Aare Guru API-Daten laden
    this.aareApiService.getAareData('bern').subscribe(
      (data) => {
        this.aareData = data;
      },
      (error) => {
        console.error('Fehler beim Laden der Aare-Daten:', error);
      }
    );

    // Dad Joke API
    this.loadNewJoke();

    // Standortbasierte Länderinformationen
    this.loadCountryInfoBasedOnLocation();

    // Intersection Observer für Animationen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });

    const elements = this.el.nativeElement.querySelectorAll('.slide-in-element, .grid-item');
    elements.forEach((el: Element) => observer.observe(el));
  }

  // Methode für neuen Witz
  loadNewJoke(): void {
    this.dadJokeApiService.getRandomJoke().subscribe(
      (data) => {
        this.dadJoke = data.joke;
      },
      (error) => {
        console.error('Fehler beim Laden des Dad-Jokes:', error);
      }
    );
  }

  // Methode für standortbasiertes Land
  loadCountryInfoBasedOnLocation(): void {
    this.geoLocationService.getCurrentPosition().then(
      (position) => {
        this.geoLocationService.getGeoLocation(position.lat, position.lon).subscribe(
          (geoData) => {
            const country = geoData.address.country;
            this.loadCountryInfo(country);
          },
          (error) => {
            this.errorMessage = 'Fehler beim Abrufen der Standortdaten.';
            console.error(error);
          }
        );
      },
      (error) => {
        this.errorMessage = 'Geolocation nicht verfügbar.';
        console.error(error);
      }
    );
  }

  // Methode für Länderinformationen
  loadCountryInfo(country: string): void {
    this.countryInfoApiService.getCountryInfo(country).subscribe(
      (data) => {
        this.countryInfo = data[0];
      },
      (error) => {
        this.errorMessage = 'Fehler beim Abrufen der Länderinformationen.';
        console.error(error);
      }
    );
  }
}
