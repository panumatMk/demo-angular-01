import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ImageRoutingModule} from './image-routing.module';
import {ImageComponent} from './image.component';
import {ShareDirectiveModule} from "@share/directive/share-directive.module";


@NgModule({
    declarations: [
        ImageComponent
    ],
    imports: [
        CommonModule,
        ImageRoutingModule,
        ShareDirectiveModule
    ]
})
export class ImageModule {
}
