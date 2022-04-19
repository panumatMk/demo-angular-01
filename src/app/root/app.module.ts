import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbButtonsModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import {ShareComponentModule} from "../share/components/share-component.module";
import {MenuComponent} from './menu/menu/menu.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from "../share/store/reducers/couter.reducer";
import {NameListReducer} from "@share/store/reducers/nameList.reducer";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";
import {PriceCompareReducer} from "@share/store/reducers/priceCompare.reducer";
import {NameList} from "@share/interface/nameList";
import {Item} from "@share/interface/priceCompare";
import {PriceCompareEffect} from "@share/store/effects/price-compare.effect";
import {EffectsModule} from "@ngrx/effects";
import nameListReducer = NameListReducer.nameListReducer;
import priceCompareReducer = PriceCompareReducer.priceCompareReducer;

export interface StageBase {
    count: number,
    nameList: NameList[],
    items: Item[]
}

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
        StoreModule.forRoot<StageBase>(
            {
                count: counterReducer,
                nameList: nameListReducer,
                items: priceCompareReducer
            }
        ),
        EffectsModule.forRoot([PriceCompareEffect]),
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
