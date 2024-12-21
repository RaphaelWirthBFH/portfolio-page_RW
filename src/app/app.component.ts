import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopComponent } from './Hauptbody/top/top.component';
import { UebermichComponent } from './Hauptbody/uebermich/uebermich.component';
import { PortfolioApiComponent } from './Hauptbody/portfolio-api/portfolio-api.component';
import { LebenslaufComponent } from "./Hauptbody/lebenslauf/lebenslauf.component";
import { KontaktComponent } from './Hauptbody/kontakt/kontakt.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopComponent,
    UebermichComponent,
    PortfolioApiComponent,
    LebenslaufComponent,
    KontaktComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  componentIds = ['top', 'uebermich', 'portfolio-api', 'lebenslauf', 'kontakt'];

  ngOnInit(): void {}

  // Listener für Tastatureingaben
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    const key = event.key;
    const index = parseInt(key, 10) - 1; 

    if (index >= 0 && index < this.componentIds.length) {
      this.scrollToComponent(this.componentIds[index]);
    }
  }


  scrollToComponent(componentId: string): void {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

 