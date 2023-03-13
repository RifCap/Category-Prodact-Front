import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private apiUrl = 'http://localhost:8080/product';

  constructor(private http: HttpClient) { }

  //select all products
  allProducts(): Observable<Product[]> {
    const url = this.apiUrl+'/all';
    return this.http.get<Product[]>(url);
  }
  //get product by id
  oneProduct(id: string): Observable<Product> {
    const url = this.apiUrl+"/"+id;
    return this.http.get<Product>(url);
  }
  //create new product
  addProduct(data: Product): Observable<Product> {
    const url = this.apiUrl+"/create";
    return this.http.post<Product>(url, data);
  }
  //update product
  setProduct(data: Product, id: string): Observable<Product> {
    const url = this.apiUrl+"/update"+id;
    return this.http.put<Product>(url, data);
  }
  //product pagination
  paginateCategory(page: number, size: number): Observable<Product[]> {
    const url = this.apiUrl+"/pagination/"+page+"/"+size;
    return this.http.get<Product[]>(url);
  }
}
