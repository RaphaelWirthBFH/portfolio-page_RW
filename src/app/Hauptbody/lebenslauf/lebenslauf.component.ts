import { Component, ElementRef, OnInit } from '@angular/core';
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
    { year: 2020, title: 'Assistent', details: 'Assistenz Geschäftsleitung Knapp Logistik Systeme, als überbrückung bis RS' },
    { year: 2021, title: 'RS', details: 'Militärdienst geleistet in Kloten' },
    { year: 2021, title: 'Assistent', details: 'wieder Assistenz Geschäftsleitung Knapp Logistik Systeme, aber diesemal teilzeit während der Berufsmatura' },
    { year: 2022, title: 'Abschluss Berufsmaturität', details: 'Berufsmaturitätsschule an der WKS erfolgreich abgeschlossen' },
    { year: 2022, title: 'Sachbearbeiter Datamanagement', details: 'Sachbearbeiter Datamangement bei Interdiscount/Microspot in Jegenstorf. Hauptaufgabe Datamapping und weiterentwicklung internes Datamangementtools' },
    { year: 2022, title: 'Beginn Studium', details: 'Wirtschaftsinformatik-Studium an der Fachhochschule Bern angefangen' },
    { year: 2023, title: 'Junior BI-Developer', details: 'Business-Intelligence Developer bei Transgourmet/Prodega.' }
  ];

  selectedEvent: TimelineEvent | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
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

  scrollTimeline(distance: number) {
    const container = this.el.nativeElement.querySelector('.timeline-container');
    container.scrollBy({ left: distance, behavior: 'smooth' });
  }

  onHover(event: TimelineEvent | null) {
    // Hier könnte später zusätzlicher Hover-Code eingefügt werden, falls benötigt.
  }

  toggleDetails(event: TimelineEvent) {
    this.selectedEvent = this.selectedEvent === event ? null : event;
  }
}
