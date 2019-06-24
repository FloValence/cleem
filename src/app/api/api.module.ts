import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiRedirectInterceptor } from './api.redirector';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    [
      { provide: HTTP_INTERCEPTORS, useClass: ApiRedirectInterceptor, multi: true },
    ],
  ],
})
export class ApiModule { }
