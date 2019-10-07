import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, ProductsModule, DashboardRoutingModule]
})
export class DashboardModule {}
