import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import path from 'path';

const routes: Routes = [{ path : '', component : ShopComponent, children : [{ path: 'shoes', loadChildren: () => import('../shoes/shoes.module').then(m => m.ShoesModule) }, { path: 'pants', loadChildren: () => import('../pants/pants.module').then(m => m.PantsModule) }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
