import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomersRoutingModule} from './customers-routing.module';
import {CustomersComponent} from './customers.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [
        CustomersComponent
    ],
    imports: [
        CommonModule,
        CustomersRoutingModule,
        NgbModule
    ],
})
export class CustomersModule {
}
