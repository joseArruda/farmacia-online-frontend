import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Cartservice {
  private api = 'http://127.0.0.1:8000/api/cart';

  constructor( private http: HttpClient ){}

  getCart():Observable<any>{
    return this.http.get(`${this.api}`);
  }

  addProductCart(id: number, quantity: number = 1):Observable<any>{
    return this.http.post(`${this.api}/add`, {id_product:id, quantity:quantity})
  }

  removeProduct(id: number):Observable<any>{
    return this.http.delete(`${this.api}/remove/${id}`);
  }
}
