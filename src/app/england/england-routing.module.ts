import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnglandComponent } from './england.component';

const routes: Routes = [{ path: '', component: EnglandComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnglandRoutingModule { }
