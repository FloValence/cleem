import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseModule } from './expense/expense.module';
import { MaterialModule } from './material/material.module';
import { ExpensesComponent } from './expense/expenses/expenses.component';
import { ApiModule } from './api/api.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,

    ExpenseModule,
    MaterialModule,
  ],
  exports: [],
  
  entryComponents: [ExpensesComponent],
  providers: [
    DatePipe,
    DecimalPipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
