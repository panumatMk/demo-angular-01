import {Component, Input, OnInit} from '@angular/core';

export interface Menu {
    label: string;
    link: string;
    isActive: boolean;
}

@Component({
    selector: 'app-nav-menu',
    templateUrl: './nav-menu.component.html',
    styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

    @Input() list: Menu[] = []

    constructor() {
        this.list = [
            {
                label: 'Pagination',
                link: '',
                isActive: false
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

    ngOnInit(): void {
    }


    setActiveMenu(index: number): void {
        this.list.forEach((menu, i) => {
            menu.isActive = i === index;
        })
    }
}
