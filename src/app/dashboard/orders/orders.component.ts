import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  template: `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Orders</h5>
        <h6 class="card-subtitle mb-2 text-muted">Latest Orders</h6>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  `,
  styles: []
})
export class OrdersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
