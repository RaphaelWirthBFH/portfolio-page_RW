import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'kontakt',
  standalone: true,
  imports: [CommonModule], // CommonModule hier explizit hinzufügen
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class kontaktComponent implements OnInit {

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
    elements.forEach((el: Element) => observer.observe(el));//test
  }


}
