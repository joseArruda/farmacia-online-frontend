import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cartservice {
  private readonly API_URL = 'http://127.0.0.1:8000/api/cart';

  constructor( private http: HttpClient ){}

  getCart():Observable<any>{
    return this.http.get(`${this.API_URL}`);
  }

  addProductCart(id: number, quantity: number = 1):Observable<any>{
    return this.http.post(`${this.API_URL}`, {id_product:id, quantity:quantity})
  }

  removeProduct(id: number):Observable<any>{
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  updateCart(id: number, action: string):Observable<any>{
    return this.http.put(`${this.API_URL}/${id}`, {action});
  }
}
