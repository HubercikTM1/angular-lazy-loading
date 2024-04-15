import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnglandRoutingModule } from './england-routing.module';
import { EnglandComponent } from './england.component';


@NgModule({
  declarations: [
    EnglandComponent
  ],
  imports: [
    CommonModule,
    EnglandRoutingModule
  ]
})
export class EnglandModule { }
