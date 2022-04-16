import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'customers',
        loadChildren: () => import('../pages/customers/customers.module').then(m => m.CustomersModule)
    },
    {
        path: 'priceCompare',
        loadChildren: () => import('../pages/price-compare/price-compare.module').then(m => m.PriceCompareModule)
    },
    {
        path: 'ngrx-app01',
        loadChildren: () => import('../pages/ngrx-app01/ngrx-app01.module').then(m => m.NgrxApp01Module)
    },
    {
        path: 'ngrx-app02',
        loadChildren: () => import('../pages/ngrx-app02/ngrx-app02.module').then(m => m.NgrxApp02Module)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
