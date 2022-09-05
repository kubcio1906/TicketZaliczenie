import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckAuthGuard } from './guards/check-auth.guard';
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

  get userName(): Observable<string> {
    return this._authService.userName
      .pipe
      // retryWhen((notifier) =>
      //   notifier.pipe(
      //     mergeMap((error, index) => {
      //       if (index) {
      //         throw error;
      //       }
      //       console.log(index);
      //       return this._apiService.refreshToken().pipe(
      //         tap((token: string) => {
      //           this._authService.setToken(token);
      //         })
      //       );
      //     })
      //   )
      // )
      ();
  }

  get authenticated(): Observable<boolean> {
    return this._authService.authenticated$;
  }

  constructor(
    private readonly _router: Router,
    private readonly _authService: AuthService,
    private readonly _apiService: ApiService
  ) {}

  login(): void {
    this._router.navigate(['account/login']);
  }

  logout(): void {
    this._authService.logout();
  }
}

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'account',
    canLoad: [CheckAuthGuard],
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
    CheckAuthGuard,
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
