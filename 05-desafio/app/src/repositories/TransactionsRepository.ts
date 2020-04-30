import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransationDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    let balance: Balance = {
      income: 0,
      outcome: 0,
      total: 0,
    };
    this.transactions.forEach((transaction: Transaction) => {
      if (transaction.type == 'income') {
        balance.income = balance.income + transaction.value;
        balance.total = balance.total + transaction.value;
      } else {
        balance.outcome = balance.outcome + transaction.value;
        balance.total = balance.total - transaction.value;
      }
    });
    return balance;
  }

  public create({ title, value, type }: CreateTransationDTO): Transaction {
    const transation = new Transaction({ title, value, type });

    this.transactions.push(transation);

    return transation;
  }
}

export default TransactionsRepository;
