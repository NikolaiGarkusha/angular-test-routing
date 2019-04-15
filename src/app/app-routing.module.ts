import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { FirstComponent } from './sub-modules/first/first/first.component';
import { SecondComponent } from './sub-modules/second/second/second.component';
import { UserComponent } from './modal/user/user.component';
import { PurchaseComponent } from './modal/purchase/purchase.component';
import { CheckoutComponent } from './modal/checkout/checkout.component';
import { CustomModalComponent } from './custom-modal/custom-modal/custom-modal.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'first',
        component: FirstComponent
    },
    {
        path: 'second',
        component: SecondComponent
    },
    {
        path: 'modal',
        component: CustomModalComponent,
        outlet: 'modal',
        children: [
            {
                path: 'user',
                component: UserComponent
            },
            {
                path: 'purchase',
                component: PurchaseComponent
            },
            {
                path: 'checkout',
                component: CheckoutComponent
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'user'
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
