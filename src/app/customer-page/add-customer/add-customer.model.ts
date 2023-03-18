import { Customer } from './../customers-section/customer.model';
export type CustomerInput= Omit<Customer, "id">