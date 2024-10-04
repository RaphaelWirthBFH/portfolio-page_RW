import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { TopComponent } from './Hauptbody/top/top.component';
import { UebermichComponent } from './Hauptbody/uebermich/uebermich.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TopComponent,
    UebermichComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Frontend';
  currentSection = 0;
  sections!: NodeListOf<Element>;

  ngOnInit(): void {
    // Hol alle Sektionen (header, top, übermich, footer)
    this.sections = document.querySelectorAll('main > *'); // Selektiert die Components innerhalb des <main>-Tags

    // Füge einen Scroll-Listener hinzu
    window.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        // Wenn nach unten gescrollt wird, zum nächsten Abschnitt
        this.currentSection = Math.min(this.currentSection + 1, this.sections.length - 1);
      } else {
        // Wenn nach oben gescrollt wird, zum vorherigen Abschnitt
        this.currentSection = Math.max(this.currentSection - 1, 0);
      }
      this.scrollToSection(this.currentSection);
    });
  }

  // Funktion zum Scrollen zu einem bestimmten Abschnitt
  scrollToSection(index: number) {
    this.sections[index].scrollIntoView({
      behavior: 'smooth', // Weiches Scrollen
      block: 'start' // Scrollt den Anfang des Abschnitts in den sichtbaren Bereich
    });
  }
}
