import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemolizeFunctionComponent } from './memolize-function.component';

const routes: Routes = [{ path: '', component: MemolizeFunctionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemolizeFunctionRoutingModule { }
