import { Component, EventEmitter, Output } from '@angular/core';
import { InventoryService } from '../../core/services/inventoryService.service';
import { NgIf } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { Navbar } from "../../shared/components/navbar/navbar";

@Component({
  selector: 'app-product-details',
  imports: [NgIf, Navbar],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
  products: any;

  constructor(
    private inventoryService: InventoryService,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');

    this.inventoryService.getById(Number(id))
    .subscribe({
      next: (data)=>{
        console.log('Sucess',data);
        this.products = data;
      },

      error: (err)=>{
        console.log('error',err);
      }
    })
  }
}
