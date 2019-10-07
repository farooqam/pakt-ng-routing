import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}
  showDashboard = true;

  ngOnInit() {}

  displayDashboard() {
    this.router.navigate([{ outlets: { dashboardoutlet: ['dashboard'] } }]);
    this.showDashboard = false;
  }

  hideDashboard() {
    this.router.navigate([{ outlets: { dashboardoutlet: null } }]);
    this.showDashboard = true;
  }
}
