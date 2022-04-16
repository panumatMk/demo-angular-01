import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {decrement, increment, reset} from '@share/actions/couter.action';

@Component({
    selector: 'app-ngrx-app01',
    templateUrl: './ngrx-app01.component.html',
    styleUrls: ['./ngrx-app01.component.scss']
})
export class NgrxApp01Component {
    count$: Observable<number>;

    constructor(private store: Store<{ count: number }>) {
        this.count$ = store.select('count');
    }

    increment() {
        this.store.dispatch(increment());
    }

    decrement() {
        this.store.dispatch(decrement());
    }

    reset() {
        this.store.dispatch(reset());
    }
}
