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
import { CustomerItemComponent } from './customer-page/customer-item/customer-item.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CustomerPageComponent,
    DashboardPageComponent,
    NotFoundPageComponent,
    TransactionsSectionComponent,
    CustomersSectionComponent,
    CustomerItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
