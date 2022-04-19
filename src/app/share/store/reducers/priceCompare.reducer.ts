import {createReducer, on} from "@ngrx/store";
import {Item} from "@share/interface/priceCompare";
import {PriceCompareAction} from "@share/store/actions/priceCompare.action";

export namespace PriceCompareReducer {
    export const initialState: Item[] = [];

    export const priceCompareReducer = createReducer(
        PriceCompareReducer.initialState,
        on(PriceCompareAction.add, (state, updateValue) => {
            return [...state, updateValue];
        }),
        on(PriceCompareAction.sortSuccess, (state, updateValue) => {
                return updateValue.items;
            }
        )
    )
}
