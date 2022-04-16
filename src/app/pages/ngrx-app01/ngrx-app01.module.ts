import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxApp01RoutingModule } from './ngrx-app01-routing.module';
import { NgrxApp01Component } from './ngrx-app01.component';


@NgModule({
  declarations: [
    NgrxApp01Component
  ],
  imports: [
    CommonModule,
    NgrxApp01RoutingModule
  ]
})
export class NgrxApp01Module { }
