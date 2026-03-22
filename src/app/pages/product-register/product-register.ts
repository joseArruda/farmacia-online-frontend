import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { InventoryService } from '../../core/services/inventoryService.service';
import { CommonModule } from "@angular/common";
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  imports: [ CommonModule, FormsModule, Navbar],
  templateUrl: './product-register.html',
  styleUrl: './product-register.scss',
})
export class ProductRegister {
  selectedFile!: File;
  product: Product = {
    id: 0,
    name: '',
    description: '',
    category: '',
    stock: 0,
    price: 0,
    image: null
  };

  constructor(
    private inventoryService: InventoryService
  ){}

  createProduct(){
    const formData = new FormData;
    formData.append('id', this.product.id.toString());
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('category', this.product.category);
    formData.append('stock', this.product.stock.toString());
    formData.append('price', this.product.price.toString());
    if(this.product.image){
        formData.append('image', this.product.image);
    }
    this.inventoryService.createProduct(formData)
    .subscribe(()=>{
      this.product = {
        id: 0,
        name: '',
        description: '',
        category: '',
        stock: 0,
        price: 0,
        image: null
      }
      Swal.fire({
        icon: 'success',
        title: 'Produto registrado!',
        showConfirmButton: false,
        timer: 1050
      })
    })
  }

  RegisteredFile(event:any){
    const file = event.target.files[0];
    if(file){
      this.product.image = file;
    }
  }
}
