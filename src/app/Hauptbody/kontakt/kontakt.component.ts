import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'kontakt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

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
