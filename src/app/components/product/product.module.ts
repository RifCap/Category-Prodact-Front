import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormProductComponent } from './form-product/form-product.component';
import { ProductserviceService } from 'src/app/shared/services/productservice.service';
import { ListProductComponent } from './list-product/list-product.component';



@NgModule({
  declarations: [
    FormProductComponent,
    ListProductComponent,],
  imports: [
    CommonModule,
  ],
  providers: [ProductserviceService]
})
export class ProductModule { }
