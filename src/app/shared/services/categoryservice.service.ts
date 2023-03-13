import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {

  private apiUrl = 'http://localhost:8080/category';

  constructor(private http: HttpClient) { }

  private _refresh = new Subject<void>();
  get refresh() {
    return this._refresh;
  }

  //select all categories
  allCategories(): Observable<Category[]> {
    const url = this.apiUrl+"/all";
    return this.http.get<Category[]>(url);
  }
  //get category by id
  oneCategory(id: string): Observable<Category> {
    const url = this.apiUrl+"/"+id;
    return this.http.get<Category>(url);
  }
  //create new category
  addCategory(data: Category): Observable<Category>{
    const url = this.apiUrl+"/create";
    return this.http.post<Category>(url, data).pipe(tap(() => {this._refresh.next(); }));
  }
  //update category
  setCategory(data: Category, id: string): Observable<Category> {
    const url = this.apiUrl+"/update/"+id;
    return this.http.put<Category>(url, data).pipe(tap(() => {this._refresh.next(); }));
  }
  //category pagination
  paginateCategory(page: number, size: number): Observable<Category[]> {
    const url = this.apiUrl+"/pagination/"+page+"/"+size;
    return this.http.get<Category[]>(url);
  }

  deleteCategory(id: string): Observable<void>{
    const url = this.apiUrl+"/delete/"+id;
    return this.http.delete<void>(url).pipe(tap(() => {this._refresh.next(); }));
  }

  countCategories(): Observable<number> {
    const url = this.apiUrl+"/count";
    return this.http.get<number>(url);
  }
}
