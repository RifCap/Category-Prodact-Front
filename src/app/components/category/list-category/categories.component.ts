import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/shared/models/category.model';
import { CategoryserviceService } from 'src/app/shared/services/categoryservice.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { FormCategoryComponent } from '../form-category/form-category.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class ListCategory implements OnInit {

  categories !: any ;

  categoriesPerPage: number = 10;
  currentPage: number = 0;
  
  pages: number[] = [];
  totalCategories!: number;
  categoriesForCurrentPage: any[] = [];


  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private categoryService: CategoryserviceService, private modalService: NgbModal) { 
    
  }

  ngOnInit(): void {
    this.numberOfCategories();
    this.getPaginationFromBackEnd();

    this.categoryService.refresh.subscribe(res => { 
      this.getPaginationFromBackEnd();
      this.modalService.dismissAll();
    });
  }

  //list categories
  getPaginationFromBackEnd() {
    this.categoryService.paginateCategory(this.currentPage, this.categoriesPerPage).subscribe(res => {
      this.categories = res;
    });
  }

  //open Modal
  onClickOpen(mode: string, category?: Category) {
        const modalRef = this.modalService.open(FormCategoryComponent, {
          ariaLabelledBy: 'modal-basic-title',
          size: 'xl',
          windowClass: 'modal-css',
          backdrop: 'static',
          keyboard: false
        });
    modalRef.componentInstance.action = mode; 
    if(mode!=='add') {
      modalRef.componentInstance.category= category;
    }
  }

  //Count Categories
  numberOfCategories() {
    this.categoryService.countCategories().subscribe( res => {
      this.totalCategories = res;
      this.generatePages();
    })
  }

  // start pagination
  onPageChange(page: number) {
    this.currentPage = page-1;
    this.generatePages();
    this.getPaginationFromBackEnd();
  }
  generatePages() {
    const totalPages = Math.ceil(this.totalCategories / this.categoriesPerPage);
    const startPage = Math.max(1, this.currentPage - 5);
    const endPage = Math.min(totalPages, this.currentPage + 4);
    this.pages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  }
  goToPreviousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getPaginationFromBackEnd();
      console.log(this.categories);
    }
  }
  goToNextPage() {
    if (this.currentPage < (Math.ceil(this.totalCategories / this.categoriesPerPage))-1) {
      this.currentPage++;
      this.getPaginationFromBackEnd();
      console.log(this.categories);
    }
  }
  // End pagination


}
