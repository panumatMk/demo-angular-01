import {AppComponent} from "./app.component";

describe('AppComponent', () => {
    let component: AppComponent;

    beforeEach(() => {
        component = new AppComponent();
    });

    it('should created', () => {
        expect(component).toBeTruthy();
    });
});
