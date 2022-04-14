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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
