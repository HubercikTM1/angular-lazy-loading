import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PantsComponent } from './pants.component';

const routes: Routes = [{ path: '', component: PantsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PantsRoutingModule { }
