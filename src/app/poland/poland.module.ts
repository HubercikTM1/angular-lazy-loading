import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolandRoutingModule } from './poland-routing.module';
import { PolandComponent } from './poland.component';


@NgModule({
  declarations: [
    PolandComponent
  ],
  imports: [
    CommonModule,
    PolandRoutingModule
  ]
})
export class PolandModule { }
