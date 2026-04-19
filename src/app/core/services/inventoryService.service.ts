import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from '../../models/product.model';
import { Pagination } from '../../models/pagination.model';
import { Api } from '../../models/apiResponse.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private readonly API_URL = 'http://127.0.0.1:8000/api/inventory';

  constructor(private http: HttpClient) {}

  getAll(page: number = 1, per_page: number = 12)
  : Observable<Api<Pagination<Product>>>{
    const params = new HttpParams()
    .set('page', page.toString())
    .set('per_page', per_page.toString());
    return this.http.get<Api<Pagination<Product>>>
    (this.API_URL, {params});
  }

  getById(id: number):Observable<Api<Product>>{
    return this.http.get<Api<Product>>
    (`${this.API_URL}/${id}`);
  }

  createProduct(productData: FormData):Observable<Api<Product>>{
    return this.http.post<Api<Product>>(`${this.API_URL}`, productData);
  }

  updateProduct(id:number, data:FormData):Observable<Api<Product>>{
    return this.http.post<Api<Product>>(`${this.API_URL}/${id}?_method=PUT`, data);
  }
  
  removeProduct(id: number):Observable<Api<void>>{
    return this.http.delete<Api<void>>(`${this.API_URL}/${id}`);
  }
}
