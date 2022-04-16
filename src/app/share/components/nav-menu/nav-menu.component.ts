import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

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

    constructor(
        private router: Router
    ) {
    }

    ngOnInit(): void {
    }


    setActiveMenu(index: number): void {
        this.list.forEach((menu, i) => {
            menu.isActive = i === index;
        });
        this.router.navigate([this.list[index].link]);
    }
}
