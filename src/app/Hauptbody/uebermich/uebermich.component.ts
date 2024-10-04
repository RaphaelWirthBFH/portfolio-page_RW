import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-uebermich',
  standalone: true,
  templateUrl: './uebermich.component.html',
  styleUrls: ['./uebermich.component.scss']
})
export class UebermichComponent implements OnInit {

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    });

    const elements = this.el.nativeElement.querySelectorAll('.slide-in-element');
    elements.forEach((el: Element) => observer.observe(el));
  }
}
