import {createAction, props} from "@ngrx/store";
import {Item} from "@share/interface/priceCompare";

export namespace PriceCompareAction {
    export const add = createAction('[Price Compare Component] add item', props<Item>());
    export const sortSuccess = createAction(
        '[Price Compare Component] sort success item',
        props<{ items: Item[] }>()
    );
}
