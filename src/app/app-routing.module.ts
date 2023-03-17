import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"customers",
    pathMatch:"full"
  },
  {
    path:"customers",
    component: CustomerPageComponent,
  },
  {
    path:"dashboard",
    component: DashboardPageComponent,
  },
  {
    path:"**",
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
