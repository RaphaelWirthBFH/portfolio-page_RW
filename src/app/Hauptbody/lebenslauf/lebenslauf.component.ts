import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lebenslauf',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lebenslauf.component.html',
  styleUrls: ['./lebenslauf.component.scss']
})
export class LebenslaufComponent implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const animation = element.getAttribute('data-animation') || 'animate__fadeIn';
          element.classList.add('animate__animated', animation);
          observer.unobserve(entry.target);
        }
      });
    });

    const elements = this.el.nativeElement.querySelectorAll('.slide-in-element');
    elements.forEach((el: Element) => observer.observe(el));
  }
}
