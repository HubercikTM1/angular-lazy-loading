import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FemaleRoutingModule } from './female-routing.module';
import { FemaleComponent } from './female.component';


@NgModule({
  declarations: [
    FemaleComponent
  ],
  imports: [
    CommonModule,
    FemaleRoutingModule
  ]
})
export class FemaleModule { }
