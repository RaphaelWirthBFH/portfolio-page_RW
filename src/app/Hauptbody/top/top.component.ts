import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Verwende CommonModule anstelle von BrowserModule
import { trigger, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  standalone: true,
  imports: [
    CommonModule  // Verwende nur CommonModule hier
    ],
  animations: [
    trigger('textAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('{{ delay }}ms', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { params: { delay: 1000 } })
    ])
  ]
})
export class TopComponent {}
