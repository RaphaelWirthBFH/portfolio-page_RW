import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { TopComponent } from './Hauptbody/top/top.component';
import { UebermichComponent } from './Hauptbody/uebermich/uebermich.component';
import { PortfolioApiComponent } from './Hauptbody/portfolio-api/portfolio-api.component';
import { LebenslaufComponent } from "./Hauptbody/lebenslauf/lebenslauf.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TopComponent,
    UebermichComponent,
    PortfolioApiComponent,
    LebenslaufComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Frontend';

  ngOnInit(): void {
    // Hier keine spezielle Scroll-Logik mehr
  }
}
