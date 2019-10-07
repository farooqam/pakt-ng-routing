import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showDashboard: boolean;

  constructor(private router: Router) { 
    this.showDashboard = false;
  }

  ngOnInit() {
  }

  toggleDashboard() {
    this.showDashboard = !this.showDashboard;

    if (this.showDashboard) {
      this.router.navigate([{outlets: {Dashboard: 'dashboard'}}]);
    } else {
      this.router.navigate([{outlets: {Dashboard: null}}]);
    }
  }

}
