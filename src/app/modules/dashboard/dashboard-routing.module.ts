import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from '@dashboard/dashboard/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'product'
    },
    {
        path: '',
        component: DashboardComponent,
        children:[
            {
                path:'product',
                loadChildren:'./product/product.module#ProductModule'
            },
            {
                path:'customer',
                loadChildren:'./customer/customer.module#CustomerModule'
            },
            {
                path:'cart',
                loadChildren:'./cart/cart.module#CartModule'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
