import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxApp02RoutingModule } from './ngrx-app02-routing.module';
import { NgrxApp02Component } from './ngrx-app02.component';
import { TableComponent } from './table/table.component';
import { InputComponent } from './input/input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    NgrxApp02Component,
    TableComponent,
    InputComponent
  ],
    imports: [
        CommonModule,
        NgrxApp02RoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class NgrxApp02Module { }
