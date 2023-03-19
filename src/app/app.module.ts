import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { TransactionsSectionComponent } from './customer-page/transactions-section/transactions-section.component';
import { CustomersSectionComponent } from './customer-page/customers-section/customers-section.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './customer-page/add-customer/add-customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './customer-page/update-customer/update-customer.component';
import { IncreaseBalanceCustomerComponent } from './customer-page/increase-balance-customer/increase-balance-customer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CustomerPageComponent,
    DashboardPageComponent,
    NotFoundPageComponent,
    TransactionsSectionComponent,
    CustomersSectionComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    IncreaseBalanceCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
