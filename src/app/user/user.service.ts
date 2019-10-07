import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor() {}

  get isLoggedIn(): boolean {
    return !!this.user;
  }
  login(email, password) {
    this.user = {
      email: email,
      password: password
    };
  }
}
