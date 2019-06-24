interface Amount {
  amount: string;
  currency: string;
}

export interface NewExpenseItem {
  id?: string;
  purchasedOn: string;
  nature: string;
  originalAmount: Amount;
  convertedAmount: Amount;
  comment: string;
  createdAt?: string;
  lastModifiedAt?: string;
}

export interface ExpenseItem {
  id: string;
  purchasedOn: string;
  nature: string;
  originalAmount: Amount;
  convertedAmount: Amount;
  comment: string;
  createdAt: string;
  lastModifiedAt: string;
}
