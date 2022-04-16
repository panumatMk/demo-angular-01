import {createReducer, on} from "@ngrx/store";
import {NameListAction} from "@share/actions/nameList.action";
import {NameList} from "@share/interface/nameList";

export namespace NameListReducer {
    export const initialState: NameList[] = [{
        name: 'Default',
        gender: 'Female'
    }];

    export const nameListReducer = createReducer(
        NameListReducer.initialState,
        on(NameListAction.add, (state, updateValue) => {
            return [...state, updateValue];
        }),
        on(NameListAction.reset, (_) => [])
)
}
