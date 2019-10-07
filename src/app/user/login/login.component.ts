import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}
  title = 'Login';
  ngOnInit() {}

  login(loginForm: NgForm) {
    const email = loginForm.form.value.email;
    const password = loginForm.form.value.password;
    console.log(email, password);
    this.userService.login(email, password);
    this.router.navigateByUrl('/posts');
  }
}
