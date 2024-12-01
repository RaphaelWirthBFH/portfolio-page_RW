import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  year: number;
  title: string;
  details: string;
}

@Component({
  selector: 'app-lebenslauf',
  standalone: true,
  imports: [CommonModule], // CommonModule hier explizit hinzufügen
  templateUrl: './lebenslauf.component.html',
  styleUrls: ['./lebenslauf.component.scss']
})
export class LebenslaufComponent implements OnInit {
  events: TimelineEvent[] = [
    { year: 2017, title: 'Beginn Berufslehre Kaufmann', details: 'Kaufmann Profil E bei fenaco Genossenschaft' },
    { year: 2020, title: 'Abschluss Berufslehre', details: 'Erfolgreich abgeschlossen' },
    { year: 2020, title: 'Assistent', details: 'Assistenz Geschäftsleitung Knapp Logistik Systeme' },
    { year: 2021, title: 'RS', details: 'Militärdienst geleistet in Kloten' },
    { year: 2021, title: 'Assistent', details: 'Assistenz Geschäftsleitung Knapp Logistik Systeme' },
    { year: 2022, title: 'Abschluss Berufsmaturität', details: 'Berufsmaturitätsschule an der WKS erfolgreich abgeschlossen' },
    { year: 2022, title: 'Sachbearbeiter Datamanagement', details: 'Sachbearbeiter Datamangement bei Interdiscount/Microspot' },
    { year: 2022, title: 'Beginn Studium', details: 'Wirtschaftsinformatik-Studium an der Fachhochschule Bern angefangen' },
    { year: 2023, title: 'Junior BI-Developer', details: 'Business-Intelligence Developer bei Transgourmet/Prodega' }
  ];

  selectedEvent: TimelineEvent | null = null;
  isSmallScreen: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.checkScreenSize();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });

    const elements = this.el.nativeElement.querySelectorAll('.slide-in-element, .timeline-event');
    elements.forEach((el: Element) => observer.observe(el));
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth <= 768;
  }

  scrollTimeline(distance: number) {
    const container = this.el.nativeElement.querySelector('.timeline-container');
    container.scrollBy({ left: distance, behavior: 'smooth' });
  }

  onHover(event: TimelineEvent | null) {

  }

  toggleDetails(event: TimelineEvent) {
    this.selectedEvent = this.selectedEvent === event ? null : event;
  }
}
