import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [{ path: '', component: CustomersComponent , children : [{ path: 'male', loadChildren: () => import('../male/male.module').then(m => m.MaleModule) }, { path: 'female', loadChildren: () => import('../female/female.module').then(m => m.FemaleModule) }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
