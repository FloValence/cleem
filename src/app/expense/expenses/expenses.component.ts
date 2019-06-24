import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ExpenseItem, NewExpenseItem } from '../expense.model';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {
  expenses$: Observable<ExpenseItem[]> = this.expenseService.expenses$;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit() {
    this.expenseService.fecthExpensesAction();
  }

  createExpense(expense: NewExpenseItem) {
    this.expenseService.createExpenseAction(expense);
  }

  editExpense(expense: ExpenseItem) {
    this.expenseService.editExpenseAction(expense);
  }

  deleteExpense(expenseId: string) {
    this.expenseService.deleteExpenseAction(expenseId);
  }
}
