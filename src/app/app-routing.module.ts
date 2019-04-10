import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { FirstComponent } from './sub-modules/first/first/first.component';
import { SecondComponent } from './sub-modules/second/second/second.component';
import { UserComponent } from './modal/user/user.component';
import { PurchaseComponent } from './modal/purchase/purchase.component';
import { CheckoutComponent } from './modal/checkout/checkout.component';

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
        path: 'user',
        component: UserComponent,
        outlet: 'modal'
    },
    {
        path: 'purchase',
        component: PurchaseComponent,
        outlet: 'modal'
    },
    {
        path: 'checkout',
        component: CheckoutComponent,
        outlet: 'modal'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
