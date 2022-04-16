import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbButtonsModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import {ShareComponentModule} from "../share/components/share-component.module";
import {MenuComponent} from './menu/menu/menu.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from "../share/reducers/couter.reducer";
import {NameListReducer} from "@share/reducers/nameList.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";
import nameListReducer = NameListReducer.nameListReducer;

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
        ShareComponentModule,
        StoreModule.forRoot({count: counterReducer, nameList: nameListReducer}),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
