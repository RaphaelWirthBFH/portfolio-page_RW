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
          entry.target.classList.add('animate__animated'); // Basisklasse von Animate.css
  
          if (entry.target.classList.contains('line-container')) {
            entry.target.classList.add('animate__fadeInLeft'); // Animation für die Linie
          } else if (entry.target.classList.contains('content-text')) {
            entry.target.classList.add('animate__fadeInUp'); // Animation für den Text
          } else {
            entry.target.classList.add('animate__fadeInLeft'); // Animation für den Titel
          }
        }
      });
    });
  
    const elements = this.el.nativeElement.querySelectorAll('.slide-in-element');
    elements.forEach((el: Element) => observer.observe(el));
  }
}