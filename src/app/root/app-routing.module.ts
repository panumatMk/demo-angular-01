import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

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
    },
    {
        path: 'memolizeFunction',
        loadChildren: () => import('../pages/memolize-function/memolize-function.module').then(m => m.MemolizeFunctionModule)
    },
    {path: 'image', loadChildren: () => import('../pages/image/image.module').then(m => m.ImageModule)}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    exports: [RouterModule],
    providers: [
    ]
})
export class AppRoutingModule {
}
