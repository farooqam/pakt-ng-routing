import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './order-list/order-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OrderListComponent],
  imports: [CommonModule, RouterModule]
})
export class OrdersModule { }
