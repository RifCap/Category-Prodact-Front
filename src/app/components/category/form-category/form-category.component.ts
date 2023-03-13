import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Category } from 'src/app/shared/models/category.model';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CategoryserviceService } from 'src/app/shared/services/categoryservice.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrls: ['./form-category.component.css']
})
export class FormCategoryComponent implements OnInit {

  //Form Validation
  

  @Input() action!: String;  
  @Input() category = new Category();

  myForm !: FormGroup;


  constructor(public activeModal: NgbActiveModal, private categoryService: CategoryserviceService) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.myForm = new FormGroup({
      nom: new FormControl({value : this.category.nom, disabled:false}, [Validators.required, Validators.maxLength(20)]),
      description: new FormControl({value: this.category.description, disabled: false}, [Validators.required, Validators.maxLength(30)]),
    });
  }

  saveCategory() {
    if(this.action ==='add') {
      this.categoryService.addCategory(this.myForm.value).subscribe( 
        res => console.log("Added with success"+res),
        error => console.error("Message: "+error.error.message +" | Status: "+ error.error.status +" | Time: "+error.error.timestamp)
        );
    } else if(this.action === 'edit') {
      this.categoryService.setCategory(this.myForm.value, this.category.id).subscribe(res => {
        console.log("Updated with success");
      })
    }else {
      this.categoryService.deleteCategory(this.category.id).subscribe(res => {
        console.log("Deleted with success");
      })
    }
  }

}
