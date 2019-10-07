import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [InvoiceListComponent],
  imports: [CommonModule, RouterModule]
})
export class InvoicesModule { }
