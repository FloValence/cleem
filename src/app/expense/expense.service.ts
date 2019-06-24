import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { ExpenseItem, NewExpenseItem } from './expense.model';

interface ExpenseState {
  expenses: ExpenseItem[]
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  protected state: BehaviorSubject<ExpenseState> = new BehaviorSubject<ExpenseState>({expenses: []});
  constructor(protected http: HttpClient) { }

  get state$() {
    return this.state.asObservable();
  }

  get expenses$() {
    return this.state.asObservable().pipe(map(state => state.expenses));
  }

  fecthExpensesAction() {
    const state = this.state.getValue();
    this.getExpenses().subscribe((expenses) => {
      this.state.next({
        ...state,
        expenses
      });
    });
  }

  createExpenseAction(expense: NewExpenseItem) {
    this.createExpense(expense).subscribe(() => this.fecthExpensesAction());
  }

  editExpenseAction(expense: ExpenseItem) {
    this.editExpense(expense).subscribe(() => this.fecthExpensesAction());
  }

  deleteExpenseAction(expenseId: string) {
    this.deleteExpense(expenseId).subscribe(() => this.fecthExpensesAction());
  }

  //

  private getExpenses(): Observable<ExpenseItem[]> {
    return this.http.get<{items: ExpenseItem[]}>('/api/expenseItems').pipe(
      map(result => result.items),
    );
  }

  private getExpenseById(id): Observable<ExpenseItem> {
    return this.http.get<ExpenseItem>(`/api/expenseItems/${id}`);
  }

  private createExpense(expense: NewExpenseItem): Observable<ExpenseItem> {
    return this.http.post<ExpenseItem>('/api/expenseItems', expense);
  }

  private editExpense(expense: ExpenseItem): Observable<ExpenseItem> {
    return this.http.put<ExpenseItem>(`/api/expenseItems/${expense.id}`, expense);
  }

  private deleteExpense(expenseId: string): Observable<ExpenseItem[]> {
    return this.http.delete<ExpenseItem[]>(`/api/expenseItems/${expenseId}`);
  }
}
