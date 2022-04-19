import {Injectable} from '@angular/core';
import {Store} from "@ngrx/store";
import {StageBase} from "../../../root/app.module";
import {Item} from "@share/interface/priceCompare";
import {PriceCompareAction} from "@share/store/actions/priceCompare.action";
import {selectFirstItem, selectItems} from "@share/store/selectors/priceCompare.selector";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PriceCompareService {

    items$ = this.store.select(selectItems);
    firstName$ = this.store.select(selectFirstItem);
    // firstName$ = this.items$.pipe(map((items: Item[]) => {
    //     console.log(items);
    //     return items[0]?.name;
    // }));


    constructor(private store: Store<StageBase>) {
        this.firstName$.subscribe();
        this.firstName$.subscribe();
        this.firstName$.subscribe();
    }

    addItem(item: Item): void {
        this.store.dispatch(PriceCompareAction.add(item));
    }
}
