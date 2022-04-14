import {MenuComponent} from './menu.component';
import {Router} from "@angular/router";

describe('MenuComponent', () => {
    let component: MenuComponent;
    let router: Router;

    beforeEach(() => {
        router = {} as any;
        component = new MenuComponent(router);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
