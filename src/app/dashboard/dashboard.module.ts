import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { OrdersComponent } from './orders/orders.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [DashboardComponent, InvoicesComponent, OrdersComponent, MessagesComponent],
  imports: [CommonModule, DashboardRoutingModule]
})
export class DashboardModule {}
