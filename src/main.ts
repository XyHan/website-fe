import { LOCALE_ID } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppModule } from './app/app.module';
import { environment } from './app/infrastructure/config/environments/environment';

registerLocaleData(localeFr, 'fr');

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  platformBrowserDynamic()
  .bootstrapModule(AppModule, { providers: [{ provide: LOCALE_ID, useValue: 'fr' }] })
  .catch(err => console.error(err));
}


 if (document.readyState === 'complete') {
   bootstrap();
 } else {
   document.addEventListener('DOMContentLoaded', bootstrap);
 }
 
