import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  AuthResponse,
  RegisterData,
  RegisterResponse,
  User,
} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  get user() {
    return { ...this._user };
  }

  constructor(private http: HttpClient) {}

  register(formData: RegisterData): Observable<RegisterResponse> {
    return this.http
      .post<RegisterResponse>(`${this.baseUrl}/auth/register`, formData)
      .pipe(catchError((e) => of(e.error)));
  }

  login(email: String, password: string): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.baseUrl}/auth/login`, {
        email,
        password,
      })
      .pipe(catchError((e) => of(e.error)));
  }

  validarToken() {
    const headers = new HttpHeaders().set(
      'x-token',
      localStorage.getItem('token') || ''
    );

    return this.http
      .get<AuthResponse>(`${this.baseUrl}/auth/renew`, { headers })
      .pipe(
        map((resp) => {
          localStorage.setItem('token', resp.token!);

          this._user = {
            id: resp.id!,
            name: resp.name!,
            email: resp.email!,
          };

          return resp.ok;
        }),
        catchError((error) => of(false))
      );
  }

  logout() {
    localStorage.removeItem('token');
  }
}
