import { Component } from '@angular/core';
import { Header } from '../../modules/components/header/header';
import { Inventary } from '../../services/inventary.service';
import { CommonModule } from "@angular/common";
import IProductsInterface from '../../interface/IProducts.Interface';
import { FormsModule } from '@angular/forms';
import { Product } from '../../modules/components/product/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-product',
  imports: [Header, CommonModule, FormsModule, Product],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.scss',
})
export class EditProduct {
  selectedFile!: File;
  product: IProductsInterface = {
    id: 0,
    name: '',
    description: '',
    category: '',
    stock: 0,
    price: 0,
    image: null
  };

  constructor(
    private inventaryService: Inventary
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
    this.inventaryService.createProduct(formData)
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
