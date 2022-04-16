import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {NameList} from "@share/interface/nameList";
import {Store} from "@ngrx/store";
import {NameListAction} from "@share/actions/nameList.action";

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

    nameForm = new FormControl();
    genderForm = new FormControl();

    constructor(private store: Store<{ nameList: NameList[] }>) {
    }

    ngOnInit(): void {
    }

    addToTable() {
        const rawValue: NameList = {
            name: this.nameForm.value,
            gender: this.genderForm.value
        }
        if (!rawValue.name || !rawValue.gender) {
            return;
        }
        this.store.dispatch(NameListAction.add(rawValue));
        this.nameForm.reset();
        this.genderForm.reset();
    }

    resetTable() {
        this.store.dispatch(NameListAction.reset());
    }

}
