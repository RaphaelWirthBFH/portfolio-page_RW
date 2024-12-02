import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

// Script zur Entfernung des Loaders
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const appRoot = document.querySelector('app-root') as HTMLElement;

  if (loader && appRoot) {
    loader.style.display = 'none'; // Verberge den Loader
    appRoot.style.display = 'block'; // Zeige die App
  }
});

// Bootstrap der Angular App
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
