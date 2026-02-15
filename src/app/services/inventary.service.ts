import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IProductsInterface from '../interface/IProducts.Interface';

@Injectable({
  providedIn: 'root',
})
export class Inventary {
  private api = 'http://127.0.0.1:8000/api/inventory';

  constructor(private http: HttpClient) {}

  getAll(): Observable<IProductsInterface[]>{
    return this.http.get<any>(`${this.api}`);
  }

  createProduct(productData: FormData):Observable<any>{
    return this.http.post<any>(`${this.api}`, productData);
  }

  getById(id: any):Observable<any>{
    return this.http.get(`${this.api}/${id}`);
  }

  updateProduct(id:any, data:any):Observable<any>{
    return this.http.put(`${this.api}/${id}`, data);
  }
  
  removeProduct(id: number):Observable<any>{
    return this.http.delete(`${this.api}/${id}`);
  }
}
