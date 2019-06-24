import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ExpenseListComponent,
    ExpenseFormComponent,
    ExpensesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule,

    HttpClientModule,
  ],

  exports: [
    ExpensesComponent,
  ]
})
export class ExpenseModule { }
