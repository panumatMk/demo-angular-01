import {Component, OnInit} from '@angular/core';
import {Menu} from "../../../share/components/nav-menu/nav-menu.component";
import {Router} from "@angular/router";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

    list: Menu[] = [];

    constructor() {
    }

    ngOnInit(): void {
        this.list = [
            {
                label: 'Price Za',
                link: '/priceCompare',
                isActive: false
            },
            {
                label: 'counter (ngrx)',
                link: '/ngrx-app01',
                isActive: false
            },
            {
                label: 'Name list (ngrx)',
                link: '/ngrx-app02',
                isActive: false
            },
            {
                label: 'Memolize Pipe',
                link: '/memolizeFunction',
                isActive: false
            }, {
                label: 'Image Directive',
                link: '/image',
                isActive: false
            }
        ]
    }

}
