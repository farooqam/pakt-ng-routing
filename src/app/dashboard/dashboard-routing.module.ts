import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { OrdersComponent } from './orders/orders.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    outlet: 'dashboardoutlet'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
