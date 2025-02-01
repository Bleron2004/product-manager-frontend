import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideZoneChangeDetection} from '@angular/core';
import {importProvidersFrom} from '@angular/core';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {ApiModule, Configuration} from './openapi-client';
import {routes} from './app.routes';
import {authinteInterceptor} from './interceptors/authinte.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}), // Optimizes change detection
    provideRouter(routes), // Provides the Angular Router
    provideAnimations(), // Ensures Material animations are correctly handled
    provideHttpClient(withInterceptors([authinteInterceptor])), // Registers the interceptor
    importProvidersFrom(
      ApiModule.forRoot(() =>
        new Configuration({
          basePath: 'https://294.cyrotech.ch',
        })
      )
    ),
  ],
};
