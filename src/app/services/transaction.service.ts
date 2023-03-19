import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from '../customer-page/transactions-section/transaction.modal';
import { API_URL } from './customer.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url=API_URL+"/transactions";
  constructor(private http:HttpClient) { }

  makeTransaction(transaction:Transaction):Observable<Transaction>{
   return this.http.post<Transaction>(this.url,transaction);

  }
  getTransactions():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.url);
  }
}
