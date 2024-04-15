import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolandComponent } from './poland.component';

const routes: Routes = [{ path: '', component: PolandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolandRoutingModule { }
