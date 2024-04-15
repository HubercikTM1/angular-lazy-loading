import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PantsRoutingModule } from './pants-routing.module';
import { PantsComponent } from './pants.component';


@NgModule({
  declarations: [
    PantsComponent
  ],
  imports: [
    CommonModule,
    PantsRoutingModule
  ]
})
export class PantsModule { }
