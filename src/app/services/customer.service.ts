import { CustomerInput } from './../customer-page/add-customer/add-customer.model';
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
  searchCustomers(term:string):Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.url}?q=${term}`);
  }

  addCustomer(customer:CustomerInput):Observable<Customer>{

    return this.http.post<Customer>(this.url,({...customer,createdAt:new Date()}));
  }
  removeCustomer(id:string):Observable<Customer>{
    return this.http.delete<Customer>(`${this.url}/${id}`);
  }
  updateCustomer(customer:Customer):Observable<Customer>{
    console.log('customer received:>> ', customer);
    return this.http.put<Customer>(`${this.url}/${customer.id}`,({...customer,updatedAt:new Date()}));
  }
  
  getLastUpdated(limit:number):Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.url}?_sort=updatedAt&_order=asc&_limit=${limit}`);
  }

  getLastAdded(limit:number):Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.url}?_sort=createdAt&_order=asc&_limit=${limit}`);
  }


}
