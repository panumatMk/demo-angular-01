import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceCompareRoutingModule } from './price-compare-routing.module';
import { PriceCompareComponent } from './price-compare.component';


@NgModule({
  declarations: [
    PriceCompareComponent
  ],
  imports: [
    CommonModule,
    PriceCompareRoutingModule
  ]
})
export class PriceCompareModule { }
