import {createSelector, Selector} from "@ngrx/store";
import {StageBase} from "../../../root/app.module";
import {Item} from "@share/interface/priceCompare";

export const selectItems: Selector<StageBase, Item[]> = (state => state.items)

export const selectFirstItem = createSelector(
    selectItems,
    (items: Item[]) => {
        return items[0]?.name
    }
);
