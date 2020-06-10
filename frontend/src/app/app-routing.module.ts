import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from './module/transaction-list/transaction-list.component';
import { AddeditTransactionComponent } from './module/addedit-transaction/addedit-transaction.component';


const routes: Routes = [
  {
    path: '',
    component: TransactionListComponent
  },
  {
    path: 'add',
    component: AddeditTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
