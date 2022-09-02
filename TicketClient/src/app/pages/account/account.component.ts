import { Component, NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import {
  Login,
  LoginModule,
} from 'src/app/components-v2/login/login.component';
import {
  Register,
  RegisterModule,
} from 'src/app/components-v2/register/register.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class Account {}

const routes: Routes = [
  {
    path: '',
    component: Account,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    LoginModule,
    RegisterModule,
    MatTabsModule,
  ],
  declarations: [Account],
  exports: [Account],
})
export class AccountModule {}

//https://mdbootstrap.com/docs/standard/extended/login/#!
