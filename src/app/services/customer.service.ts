import { Customer } from '../customer-page/customers-section/customer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

export const API_URL = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url=API_URL+"/customers";
  constructor(private http:HttpClient) { }
  
  getCustomers():Observable<Customer[]>{
    return this.http.get<Customer[]>(this.url);
  }

}
