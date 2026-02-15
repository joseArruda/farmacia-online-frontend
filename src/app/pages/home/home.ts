import { Component } from '@angular/core';
import { Header } from '../../modules/components/header/header';
import { Product } from '../../modules/components/product/product';
import { Inventary } from '../../services/inventary';
import IProductsInterface from '../../modules/interface/IProducts.Interface';
import { NgForOf } from "@angular/common";
import { Cartservice } from '../../services/cartservice';

@Component({
  selector: 'app-home',
   standalone: true,
  imports: [Header, NgForOf],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  products: IProductsInterface[]=[];
  cartProduct: []=[];
  
    constructor(
      private inventaryService: Inventary,
      private cartService: Cartservice
    ){}
  
    ngOnInit(){
      this.inventaryService.getAll()
      .subscribe({
        next: (response)=>{
          this.products = response;
          console.log(response);
        },
        error: (err) => console.error(err)
      })
    }

    addCart(id:number){
      this.cartService.addProductCart(id)
      .subscribe((data)=>{
        this.cartProduct = data
        console.log("Adicionado.", data)
      })
    }
  
    removeProduct(id: number){
      this.inventaryService.removeProduct(id).
      subscribe(()=>{
        this.products = this.products.filter(i=>i.id != id)
      })
    }
}
