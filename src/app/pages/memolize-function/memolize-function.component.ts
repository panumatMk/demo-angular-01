import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-memolize-function',
    templateUrl: './memolize-function.component.html',
    styleUrls: ['./memolize-function.component.scss']
})
export class MemolizeFunctionComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    getThaiNumber(num: number): string {
        console.log('getThaiNumber', num);
        switch (num) {
            case 1:
                return '๑';
            case 2:
                return '๒';
            case 3:
                return '๓';
            case 4:
                return '๔';
            case 5:
                return '๕';
            case 6:
                return '๖';
            case 7:
                return '๗';
            case 8:
                return '๘';
            case 9:
                return '๙';
            case 0:
                return '๐';
            default:
                return '';
        }
    }

}
