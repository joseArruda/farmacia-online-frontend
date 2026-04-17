import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { FormsModule } from "@angular/forms";
import { InventoryService } from '../../core/services/inventoryService.service';
import { Cartservice } from '../../core/services/cartservice.service';
import { Product } from '../../models/product.model';
import { CommonModule, NgForOf } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-cart',
  imports: [Navbar, FormsModule, NgForOf, CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cartProducts: any[] = [];

  constructor( 
    private cartService: Cartservice,
   ){}

   ngOnInit(){
    this.cartLoad();
   }

   cartLoad(){
    this.cartService.getCart()
    .subscribe((data)=>{
      this.cartProducts = data.data;
      console.log('products', data.data)
    })
   }

   addCart(id: number){
        console.log('click')
      this.cartService.addProductCart(id)
      .subscribe((data)=>{
        console.log(data)
        this.cartProducts = data;
      })
    }

    removeCart(id: number){
      this.cartService.removeProduct(id)
      .subscribe(()=>{
        this.cartLoad();
      })
    }

    updateCart(id: number, action: string){
      console.log('id enviado: ',id)
      this.cartService.updateCart(id, action)
      .subscribe(()=>{
        this.cartLoad();
      })
    }

    totalCart(){
      return this.cartProducts.reduce((total, item)=>{
        return total + (Number(item.product.price) * item.quantity);
      }, 0)
    }
}