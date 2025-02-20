

import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideRouter(appRoutes, withComponentInputBinding()),
    provideAnimations(),
    provideHttpClient()
  ],
};


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
