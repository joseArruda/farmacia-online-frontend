import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Inventary } from '../../../services/inventary.service';
import IProductsInterface from '../../../interface/IProducts.Interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [ CommonModule ],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  products: IProductsInterface[]=[];

  constructor(
    private inventaryService: Inventary,
    private router: Router
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

  removeProduct(id: number){
    this.inventaryService.removeProduct(id).
    subscribe(()=>{
      this.products = this.products.filter(i=>i.id != id)
    })
  }

  editProduct(id: any){
    this.router.navigate(['/edit', id]);
  }
  
}
