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

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.router.navigate(['priceCompare']);

        this.list = [
            {
                label: 'Price Za',
                link: '/priceCompare',
                isActive: true
            },
            {
                label: 'Toast',
                link: '',
                isActive: false
            },
            {
                label: 'Dropdown',
                link: '',
                isActive: false
            },
            {
                label: 'Table',
                link: '',
                isActive: false
            }
        ]
    }

}
