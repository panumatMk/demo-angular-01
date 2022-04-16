import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxApp01Component } from './ngrx-app01.component';

const routes: Routes = [{ path: '', component: NgrxApp01Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxApp01RoutingModule { }
