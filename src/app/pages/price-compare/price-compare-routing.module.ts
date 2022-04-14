import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceCompareComponent } from './price-compare.component';

const routes: Routes = [{ path: '', component: PriceCompareComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceCompareRoutingModule { }
