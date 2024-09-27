import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'; // Material Icons importieren

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MatIconModule],  // MatIconModule importieren
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
