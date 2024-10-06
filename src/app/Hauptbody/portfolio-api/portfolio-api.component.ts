import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-portfolio-api',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-api.component.html',
  styleUrl: './portfolio-api.component.scss'
})
export class PortfolioApiComponent {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });

    const elements = this.el.nativeElement.querySelectorAll('.slide-in-element');
    elements.forEach((el: Element) => observer.observe(el));
  }
}
