import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div>
      <p>Latest 5 Posts</p>
      <p>Latest 5 todos</p>
    </div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
