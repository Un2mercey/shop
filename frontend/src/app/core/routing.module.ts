import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopPageComponent} from '../pages/shop-page/shop-page.component';

const routes: Routes = [
  {path: '', component: ShopPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
