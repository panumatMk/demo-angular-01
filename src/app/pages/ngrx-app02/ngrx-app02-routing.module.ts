import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxApp02Component } from './ngrx-app02.component';

const routes: Routes = [{ path: '', component: NgrxApp02Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxApp02RoutingModule { }
