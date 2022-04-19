import {Injectable} from "@angular/core";
import {Actions, concatLatestFrom, createEffect, ofType} from "@ngrx/effects";
import {PriceCompareAction} from "@share/store/actions/priceCompare.action";
import {map, tap} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {StageBase} from "../../../root/app.module";
import {PriceCompareService} from "@share/store/store.service.ts/price-compare.service";
import {Item} from "@share/interface/priceCompare";

@Injectable()
export class PriceCompareEffect {
    sortEffect = createEffect(
        () => this.actions$.pipe(
            ofType(PriceCompareAction.add),
            concatLatestFrom(() => this.priceCompareService.items$),
            map(([action, items]) => {
                return [...items].sort((a: Item, b: Item) => a.totalPrice - b.totalPrice)
            }),
            // map(() => PriceCompareAction.sortSuccess({items: []}))
            tap((items) => this.store.dispatch(PriceCompareAction.sortSuccess({items})))
        ),
        {
            dispatch: false
        }
    )

    constructor(
        private actions$: Actions,
        private store: Store<StageBase>,
        private priceCompareService: PriceCompareService
    ) {
    }
}
