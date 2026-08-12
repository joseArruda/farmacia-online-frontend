import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { InventoryService } from '../../../core/services/inventoryService.service';
@Component({
  selector: 'app-product-card',
  imports: [ CommonModule ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input() mode: 'shop' | 'admin' = 'shop';
  @Input() product!: Product;

  @Output() add = new EventEmitter<number>();

  constructor(
    private router: Router,
    private inventoryService: InventoryService
  ){}

  editProduct(id: number){
    this.router.navigate(['product/edit/', id]);
  }
  
  goToDetails(id: number){
    this.router.navigate(['product/details', id]);
  }

  addToCart(){
    this.add.emit(this.product.id)
  }

  remove(id: number){
    console.log("click")
    this.inventoryService.removeProduct(id).subscribe(()=>{
      
    })
  }

  getImageUrl(image: string | null){

    return `http://127.0.0.1:8000/storage/${image}`;

  }
}
