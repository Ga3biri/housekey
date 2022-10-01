import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';
import { OtpComponent } from './otp/otp.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full'  },
  { path: ':uuid/:userId', component: OtpComponent}
];

@NgModule({
  declarations: [LoginComponent, OtpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LoginModule { }
