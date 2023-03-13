import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductComponent } from './form-product/form-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';


const routes: Routes = [
  { path: 'list_products', component: ListProductComponent },
  { path: 'add_product', component: FormProductComponent },
  { path: 'update_product', component: FormProductComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
