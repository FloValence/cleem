import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ExpenseItem, NewExpenseItem } from '../../expense.model';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.scss']
})
export class ExpenseListComponent {
  @Input() expenses: ExpenseItem[];
  @Output() deleteExpense = new EventEmitter<string>()
  @Output() editExpense = new EventEmitter<ExpenseItem>()
  @Output() createExpense = new EventEmitter<NewExpenseItem>()

  trackByFn(index, expense: ExpenseItem) {
    return expense.id;
  }
}
