import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {NameList} from "@share/interface/nameList";

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

    nameList!: Observable<any[]>;

    constructor(private store: Store<{ nameList: NameList[] }>) {
        this.nameList = store.select('nameList');
    }

    ngOnInit(): void {
    }

}
