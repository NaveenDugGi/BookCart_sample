import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingcartComponent } from 'src/app/component/shoppingcart/shoppingcart.component';
import { SimilarListComponent } from './component/similar-list/similar-list.component';

const routes: Routes = [

{ path: '', redirectTo: '/shop', pathMatch: 'full' },
{ path:'', component: ShoppingcartComponent},
{ path: 'shop', component: ShoppingcartComponent },
//{ path: '**', component: PageNotFound },
{ path:'bookdetails', component: SimilarListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
