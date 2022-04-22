import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemolizePipe } from '../memolize.pipe';



@NgModule({
  declarations: [
    MemolizePipe
  ],
  exports: [
    MemolizePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharePipeModule { }
