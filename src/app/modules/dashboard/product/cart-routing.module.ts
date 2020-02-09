import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from '@dashboard/dashboard/product/product/product.component';
import { CreateComponent } from '../product/create/create.component';

const routes: Routes = [
    {
        path: '',
        component: ProductComponent,
        children: [
            {
                path: 'create',
                component: CreateComponent
            },
            {
              path:':id/edit',
              component:CreateComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule {
}
