import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PriceCompareRoutingModule} from './price-compare-routing.module';
import {PriceCompareComponent} from './price-compare.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HelloComponent} from "./hello/hello.component";


@NgModule({
    declarations: [
        PriceCompareComponent
    ],
    imports: [
        CommonModule,
        PriceCompareRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    entryComponents: [HelloComponent]
})
export class PriceCompareModule { }
