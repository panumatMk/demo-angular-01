import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {combineLatest, Observable} from "rxjs";
import {Item} from "@share/interface/priceCompare";
import {PriceCompareService} from "@share/store/store.service.ts/price-compare.service";
import {HelloComponent} from "./hello/hello.component";

@Component({
    selector: 'app-price-compare',
    templateUrl: './price-compare.component.html',
    styleUrls: ['./price-compare.component.scss']
})
export class PriceCompareComponent implements OnInit {
    list?: Observable<Item[]>;

    formGroup!: FormGroup;

    constructor(
        private priceCompareService: PriceCompareService,
        private viewContainerRef: ViewContainerRef
        // private actions$: ActionsSubject
    ) {
        this.list = this.priceCompareService.items$;

        // this.actions$.pipe(
        //     ofType(PriceCompareAction.sortSuccess)
        // )
        //     .subscribe(console.log);
    }

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            name: new FormControl(),
            weight: new FormControl(),
            price: new FormControl(),
            totalPrice: new FormControl(0)
        })

        const weightValueChange = this.formGroup.get('weight')!.valueChanges;
        const priceValueChange = this.formGroup.get('price')!.valueChanges
        combineLatest([weightValueChange, priceValueChange])
            .subscribe(([weight, price]) => {
                    if (weight && price) {
                        const totalPrice = (weight / 100) * price;
                        this.formGroup.get('totalPrice')?.setValue(totalPrice);
                    } else {
                        this.formGroup.get('totalPrice')?.setValue(0);
                    }
                }
            )
    }

    addItem(): void {
        const value = this.formGroup.getRawValue();
        this.formGroup.reset();
        this.priceCompareService.addItem(value);
    }

    createHello(): void {
        // this.viewContainerRef.createComponent(HelloComponent);
    }

}
