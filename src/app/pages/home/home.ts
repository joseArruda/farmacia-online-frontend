import { Component } from '@angular/core';
import { Header } from '../../modules/components/header/header';
import { Inventary } from '../../services/inventary.service';
import IProductsInterface from '../../interface/IProducts.Interface';
import { NgForOf } from "@angular/common";
import { Cartservice } from '../../services/cartservice.service';
import { Router } from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
   standalone: true,
  imports: [ Header, NgForOf ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  products: IProductsInterface[]=[];
  allProducts: IProductsInterface[]=[];
  cartProduct: []=[];
  
    constructor(
      private inventaryService: Inventary,
      private cartService: Cartservice,
      private router: Router
    ){}
  
    ngOnInit(){
      this.inventaryService.getAll()
      .subscribe({
        next: (response)=>{
          this.products = response;
          this.allProducts = response;
        },
        error: (err) => console.error(err)
      })
    }

    addCart(id:number){
      this.cartService.addProductCart(id)
      .subscribe((data)=>{
        this.cartProduct = data
        Swal.fire({
          icon: 'success',
          title: 'Produto adicionado ao carrinho!',
          showConfirmButton: false,
          timer: 1050
        })
      })
    }
  
    removeProduct(id: number){
      this.inventaryService.removeProduct(id).
      subscribe(()=>{
        this.products = this.products.filter(i=>i.id != id)
      })
    }

    goToDetails(id: number){
      this.router.navigate(['/details', id]);
    }

    filterProduct(text: string){
      if(!text){
        this.products = this.allProducts;
        return;
      }
        this.products = this.allProducts.filter(product =>
        product.name.toLowerCase().includes(text.toLowerCase()))
      }
}

