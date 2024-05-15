import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_interfaces/user';

const API_URL = 'http://localhost:8080/api/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  message: String = "";

  constructor(private http: HttpClient) { }

  getAdminBoard(): Observable<User[]> {
    return this.http.get<User[]>(API_URL + 'admin');
  }

  deleteUser(id: number): void {
    this.http.delete(API_URL + 'deleteUser/' + id)
    .subscribe(() => this.message= 'Deletion successful');
  }
}
