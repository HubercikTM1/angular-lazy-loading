import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';

const routes: Routes = [{ path: '', component: OrdersComponent , children : [{ path: 'poland', loadChildren: () => import('../poland/poland.module').then(m => m.PolandModule) }, { path: 'england', loadChildren: () => import('../england/england.module').then(m => m.EnglandModule) }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
