import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductComponent } from './products/product.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        component: ProductComponent,
        children: [
          {
            path: '',
            component: ProductListComponent
          },
          {
            path: ':id',
            component: ProductDetailComponent
          },
          {
            path: ':id/edit',
            component: ProductEditComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
