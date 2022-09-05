import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CheckAuthGuard implements CanLoad {
  constructor(private readonly _authService: AuthService) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> {
    return this._authService.authenticated$.pipe(
      map((auth: boolean) => auth === false)
    );
  }
}
