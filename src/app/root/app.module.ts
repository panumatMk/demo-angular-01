import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbButtonsModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import {ShareComponentModule} from "../share/components/share-component.module";
import { MenuComponent } from './menu/menu/menu.component';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        NgbButtonsModule,
        ShareComponentModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
