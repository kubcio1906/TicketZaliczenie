import { Injectable, OnDestroy } from '@angular/core';
import { defer, Observable, Subject } from 'rxjs';
import { shareReplay, take, takeUntil, tap } from 'rxjs/operators';
import { LoginBody } from '../models/login-body';
import { TokenDoesNotExist } from '../models/token-does-not-exist';
import { ApiService } from './api.service';

const API_TOKEN_NAME = 'api_token';
@Injectable()
export class AuthService implements OnDestroy {
  private readonly _destroyed = new Subject<void>();
  private readonly _userLogin$ = (body: LoginBody) =>
    defer(() =>
      this._apiService.login$(body).pipe(
        shareReplay(),
        tap((token: string) => {
          this._setToken(token);
        })
      )
    );

  constructor(private readonly _apiService: ApiService) {}

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  login$(body: LoginBody): Observable<string> {
    return this._userLogin$(body).pipe(take(1), takeUntil(this._destroyed));
  }

  logout(): void {
    localStorage.removeItem(API_TOKEN_NAME);
  }

  getToken(): string {
    const token = localStorage.getItem(API_TOKEN_NAME);
    if (!token) {
      throw new TokenDoesNotExist('Token does not exist!');
    }
    return token;
  }

  private _setToken(token: string): void {
    if (!token) {
      throw new TokenDoesNotExist('Token does not exist!');
    }

    localStorage.setItem(API_TOKEN_NAME, token);
  }
}
