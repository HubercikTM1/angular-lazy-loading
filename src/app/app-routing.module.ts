import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }, { path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule) }, { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
