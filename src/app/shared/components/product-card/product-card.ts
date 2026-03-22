import { Component, Input } from '@angular/core';
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
  products: Product[]=[];
  @Input() mode: 'shop' | 'admin' = 'shop';

  constructor(
    private inventoryService: InventoryService,
    private router: Router
  ){}

  ngOnInit(){
    this.inventoryService.getAll()
    .subscribe({
      next: (response)=>{
        this.products = response.data.data;
        console.log(response);
      },
      error: (err) => console.error(err)
    })
  }

  removeProduct(id: number){
    this.inventoryService.removeProduct(id).
    subscribe(()=>{
      this.products = this.products.filter(i=>i.id != id)
    })
  }

  editProduct(id: any){
    this.router.navigate(['product/edit/', id]);
  }

  goToDetails(id: number){
      this.router.navigate(['product/details', id]);
    }
  
}
