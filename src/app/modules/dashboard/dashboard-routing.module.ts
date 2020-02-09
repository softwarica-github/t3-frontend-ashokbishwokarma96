import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from '@dashboard/dashboard/dashboard/dashboard.component';
import { RoleGuard } from 'src/app/auth/role.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'buy'
    },
    {
        path: '',
        component: DashboardComponent,
        children:[
            {
                path:'product',
                loadChildren:'./product/product.module#ProductModule',
                canActivate: [RoleGuard],
                data: {role:"true"}
            },
            {
                path:'customer',
                loadChildren:'./customer/customer.module#CustomerModule',
                canActivate: [RoleGuard],
                data: {role:"true"}
            },
            {
                path:'cart',
                loadChildren:'./cart/cart.module#CartModule',
                canActivate: [RoleGuard],
                data: {role:"true"}
            },
            {
                path:'buy',
                loadChildren:'./buy/buy.module#BuyModule'
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
