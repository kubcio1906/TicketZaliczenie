import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BuyBody } from '../models/buy-body';
import { Event } from '../models/event';
import { EventShort } from '../models/event-short';
import { LoginBody } from '../models/login-body';

@Injectable()
export class ApiService {
  private readonly _httpClientBypass: HttpClient;

  constructor(
    private readonly _httpClient: HttpClient,
    private readonly _httpBackend: HttpBackend
  ) {
    this._httpClientBypass = new HttpClient(_httpBackend);
  }

  createUser$<TOut extends void>(body: {
    userName: string;
    email: string;
    password: string;
  }): Observable<TOut> {
    return this._httpClientBypass.post<TOut>(
      `${environment.api}/auth/user-register`,
      body
    );
  }

  refreshToken$(body: LoginBody): Observable<string> {
    return this._httpClientBypass.post(
      `${environment.api}/auth/refresh-token`,
      body,
      { responseType: 'text' }
    );
  }

  login$(body: LoginBody): Observable<string> {
    return this._httpClientBypass.post(
      `${environment.api}/auth/user-login`,
      body,
      { responseType: 'text' }
    );
  }

  events$(): Observable<EventShort[]> {
    return this._httpClientBypass.get<EventShort[]>(
      `${environment.api}/event/get-all`
    );
  }

  event$(id: string): Observable<Event> {
    return this._httpClientBypass.get<Event>(
      `${environment.api}/event/get?id=${id}`
    );
  }

  buy$<TOut extends string>(body: BuyBody): Observable<TOut> {
    return this._httpClient.post<TOut>(`${environment.api}/order/buy`, body);
  }
}
