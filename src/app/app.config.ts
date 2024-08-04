import { ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withFetch} from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { InterceptoHttp } from './interceptor/interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ScrollwindowService } from './service/scrollwindow.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(),
    HttpClientModule,
    provideHttpClient( withFetch()), provideAnimationsAsync(),
    //{provide: HTTP_INTERCEPTORS, useClass: InterceptoHttp, multi: true}
    ScrollwindowService
  ]
};
