import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: string, user_password: string) : Observable <any> {
    return this.http.post(
      AUTH_API + "signin",
      {
        username,
        user_password
      },
      httpOptions
    );
  };

  register(username: string, email: string, user_password: string): Observable <any>{
    return this.http.post(
      AUTH_API + "signup",
      {
        username,
        email,
        user_password
      },
      httpOptions
    );
  };

  verifiyEmail (emailToken: string): Observable<any>{
    return this.http.post(
      AUTH_API + "verifiy-token",
      {emailToken},
      httpOptions
    )
  }

  logout():Observable<any> {
    return this.http.post(AUTH_API + "signout", {}, httpOptions);
  };
}
