import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaleRoutingModule } from './male-routing.module';
import { MaleComponent } from './male.component';


@NgModule({
  declarations: [
    MaleComponent
  ],
  imports: [
    CommonModule,
    MaleRoutingModule
  ]
})
export class MaleModule { }
