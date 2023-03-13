import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormCategoryComponent } from './form-category/form-category.component';
import { RouterModule, Routes } from '@angular/router';
import { ListCategory } from './list-category/categories.component';

const routes: Routes = [
  { path: 'list_categories', component: ListCategory },
  { path: 'form_category', component: FormCategoryComponent },
  // { path: 'update_category', component: FormCategoryComponent }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
