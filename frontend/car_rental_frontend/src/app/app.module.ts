import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerDashboardComponent } from './modules/customer/components/customer-dashboard/customer-dashboard.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCarComponent } from './modules/admin/components/post-car/post-car.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MomentDateModule } from '@angular/material-moment-adapter';
import {MAT_NATIVE_DATE_FORMATS, NativeDateAdapter, provideNativeDateAdapter} from '@angular/material/core';
import { MAT_DATE_FORMATS, NativeDateModule } from '@angular/material/core';
import { DateAdapter } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { UpdateCarComponent } from './modules/admin/components/update-car/update-car.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    CustomerDashboardComponent,
    LoginComponent,
    SignupComponent,
    PostCarComponent,
    UpdateCarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MomentDateModule,
    NativeDateModule,
    MatCardModule,
  ],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    { provide: DateAdapter, useClass: NativeDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
