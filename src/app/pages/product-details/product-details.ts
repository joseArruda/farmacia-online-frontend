import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { InventoryService } from '../../core/services/inventoryService.service';
import { CurrencyPipe, NgIf } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { Navbar } from "../../shared/components/navbar/navbar";
import { Product } from '../../models/product.model';
import { Cartservice } from '../../core/services/cartservice.service';
import Swal from 'sweetalert2';
import { Guarantees } from "../../shared/components/guarantees/guarantees";

@Component({
  selector: 'app-product-details',
  imports: [NgIf, Navbar, CurrencyPipe, Guarantees],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  product: any;
  cartProduct: []=[];
  
  constructor(
    private inventoryService: InventoryService,
    private cartService: Cartservice,
    private route: ActivatedRoute
    
  ){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');

    this.inventoryService.getById(Number(id))
    .subscribe({
      next: (data)=>{
        console.log('Sucess',data);
        this.product = data;
      },

      error: (err)=>{
        console.log('error',err);
      }
    })
  }


  addCart(id:number){
        this.cartService.addProductCart(id)
        .subscribe((data)=>{
          console.log('aqui:', data)
          this.cartProduct = data
          Swal.fire({
            icon: 'success',
            title: 'Produto adicionado ao carrinho!',
            showConfirmButton: false,
            timer: 700
          })
        })
      }
}
