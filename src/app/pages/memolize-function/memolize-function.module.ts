import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MemolizeFunctionRoutingModule} from './memolize-function-routing.module';
import {MemolizeFunctionComponent} from './memolize-function.component';
import {SharePipeModule} from "@share/pipe/share-pipe/share-pipe.module";


@NgModule({
    declarations: [
        MemolizeFunctionComponent
    ],
    imports: [
        CommonModule,
        MemolizeFunctionRoutingModule,
        SharePipeModule
    ]
})
export class MemolizeFunctionModule {
}
