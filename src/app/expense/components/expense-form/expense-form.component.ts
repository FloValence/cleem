import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms'

import { ExpenseItem, NewExpenseItem } from '../../expense.model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  @Input() expense?: ExpenseItem;
  @Output() delete = new EventEmitter<string>();
  @Output() edit = new EventEmitter<NewExpenseItem>();
  @Output() create = new EventEmitter<NewExpenseItem>();

  public form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
  ) {}

  ngOnInit() {
    this.buildForm()
  }

  buildForm() {
    this.form = this.formBuilder.group({
      purchasedOn: [this.isNew ? '' : this.expense.purchasedOn, Validators.required],
      nature: [this.isNew ? '' : this.expense.nature, Validators.required],
      originalAmount: this.formBuilder.group({
        amount: [this.isNew ? '' : this.expense.originalAmount.amount, [Validators.required, Validators.max(9999)]],
        currency: [this.isNew ? 'USD' : this.expense.originalAmount.currency, Validators.required],
      }),
      comment: [this.isNew ? '' : this.expense.comment, Validators.required]
    })
  }

  get isNew() {
    return !this.expense || !this.expense.id;
  }

  prepare() {
    return {
      ...this.expense,
      ...this.form.getRawValue(),
      convertedAmount: {
        amount: Number((this.form.getRawValue().originalAmount.amount * .9).toFixed(2)),
        currency: 'EUR'
      },
      purchasedOn: this.datePipe.transform(this.form.getRawValue().purchasedOn, 'yyyy-MM-dd')
    }
  }

  save() {
    if (this.form.errors) {
      console.warn('Form invalid, I should probably warn you', this.form);
      return;
    }

    if (this.isNew) {
      this.create.emit(this.prepare());
      return;
    }
    this.edit.emit(this.prepare());
    return;
  }

  deleteItem() {
    if (!this.expense || !this.expense.id) { return }
    this.delete.emit(this.expense.id);
  }
}
