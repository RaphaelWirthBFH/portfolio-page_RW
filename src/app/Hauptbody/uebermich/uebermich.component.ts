import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-uebermich',
  standalone: true,
  imports: [],
  templateUrl: './uebermich.component.html',
  styleUrls: ['./uebermich.component.scss']
})
export class UebermichComponent implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.add('animate__animated');

          if (target.classList.contains('line-container')) {
            target.classList.add('animate__fadeInLeft'); // Linie fliegt von links
          } else if (target.classList.contains('content-text')) {
            target.classList.add('animate__fadeInRight'); // Text fliegt von unten
          } else {
            target.classList.add('animate__fadeInRight'); // Titel fliegt von rechts
          }
        }
      });
    });

    const elements = this.el.nativeElement.querySelectorAll('.slide-in-element');
    elements.forEach((el: Element) => observer.observe(el));
  }
}
