import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}
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

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
