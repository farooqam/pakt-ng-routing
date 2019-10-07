import { Injectable } from '@angular/core';
import { User } from './user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  constructor(private authService: AuthService) {}

  get isLoggedIn(): boolean {
    return !!this.user;
  }
  
  login(email, password) {
    this.user = {
      email: email,
      password: password
    };

    this.authService.isLoggedIn = true;
  }

  logout(): void {
    this.user = null;
    this.authService.isLoggedIn = false;
  }
}
