import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { FormCategoryComponent } from './form-category/form-category.component';
import { CategoryserviceService } from 'src/app/shared/services/categoryservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCategory } from './list-category/categories.component';



@NgModule({
  declarations: [
    ListCategory,
    FormCategoryComponent,],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [CategoryserviceService],
})
export class CategoryModule { }
