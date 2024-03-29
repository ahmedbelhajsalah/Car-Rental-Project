import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './modules/customer/components/customer-dashboard/customer-dashboard.component';
import { PostCarComponent } from './modules/admin/components/post-car/post-car.component';
import { UpdateCarComponent } from './modules/admin/components/update-car/update-car.component';

const routes: Routes = [
  {path:"register", component: SignupComponent},
  {path:"login", component: LoginComponent},
  {path: "admin/dashboard", component: AdminDashboardComponent},
  {path: "customer/dashboard", component: CustomerDashboardComponent},
  {path: "admin/car", component: PostCarComponent},
  {path: "admin/car/:id", component: UpdateCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
