import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000';
  constructor(public http: HttpClient) { }

  CreateUser(user: User){
    let url = this.url + '/user';
    return this.http.post(url, user);
  }
  GetUsers(){
    let url = this.url + '/users';
    return this.http.get(url);
  }
  UpdateUser(user: User){
    let url = this.url + '/user/' + user.id;
    return this.http.post(url, user);
  }
  DeleteUser(user: User){
    let url = this.url + '/user/' + user.id;
    return this.http.delete(url);
  }
}
