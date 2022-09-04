import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ApiService } from './services/api.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class App {
  readonly title = 'TicketClient';
  auth = false;
  username = 'Mietek';

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute
  ) {}

  authAction(): void {
    this.auth = !this.auth;

    if (this.auth) {
      this._router.navigate(['']);
    } else {
      this._router.navigate(['account/login']);
    }
  }
}

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account/account.component').then((m) => m.AccountModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./pages/list/list.component').then((m) => m.ListModule),
  },
  {
    path: 'event',
    loadChildren: () =>
      import('./pages/event/event.component').then((m) => m.EventModule),
  },
];

@NgModule({
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
  ],
  declarations: [App],
  bootstrap: [App],
  providers: [
    ApiService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
