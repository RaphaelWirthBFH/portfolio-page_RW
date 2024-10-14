import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-lebenslauf',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './lebenslauf.component.html',
  styleUrl: './lebenslauf.component.scss'
})
export class LebenslaufComponent implements OnInit {
  aareData: any;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // Intersection Observer für Slide-in-Animation von Titel, Linie und Containern
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });

    const elements = this.el.nativeElement.querySelectorAll('.slide-in-element, .grid-item');
    elements.forEach((el: Element): void => observer.observe(el));
  }
}
