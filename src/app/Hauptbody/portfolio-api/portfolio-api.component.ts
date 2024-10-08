import { Component, ElementRef, OnInit } from '@angular/core';
import { AareApiService } from '../../services/aare-api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-portfolio-api',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './portfolio-api.component.html',
  styleUrls: ['./portfolio-api.component.scss'],
})
export class PortfolioApiComponent implements OnInit {
  aareData: any;

  constructor(private el: ElementRef, private aareApiService: AareApiService) {}

  ngOnInit(): void {
    // API-Daten laden
    this.aareApiService.getAareData('bern').subscribe(
      (data) => {
        this.aareData = data;
      },
      (error) => {
        console.error('Fehler beim Laden der Aare-Daten:', error);
      }
    );

    // Intersection Observer für Slide-in-Animation von Titel, Linie und Containern
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
}
