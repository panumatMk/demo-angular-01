import {createAction, props} from "@ngrx/store";
import {NameList} from "@share/interface/nameList";

export namespace NameListAction {
    export const add = createAction('[Name List Component] add name list', props<NameList>());
    export const reset = createAction('[Name List Component] reset name list')
}
