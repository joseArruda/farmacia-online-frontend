import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../../core/services/inventoryService.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Navbar } from '../../shared/components/navbar/navbar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  imports: [FormsModule, NgIf, Navbar],
  templateUrl: './product-edit.html',
  styleUrl: './product-edit.scss',
})
export class ProductEdit {
  product: any;
  selectedFile: File | null = null;

  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService,
    private router: Router
  ){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id')) ;
    
    this.inventoryService.getById(id)
    .subscribe((data)=>{
      console.log(data)
      this.product = data.data;
    })
  }

  onSelectedFile(event: any){
    const file = event.target.files[0];

    if(file){
      if(!file.type.startsWith('image/')){
        alert('Selecione uma imagem válida.');
        return;
      }
      this.selectedFile = file;
    }
  }

  updateProduct(){
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('category', this.product.category);
    formData.append('stock', this.product.stock.toString());
    formData.append('price', this.product.price.toString());

    if(this.selectedFile){
        formData.append('image', this.selectedFile);
    }

    this.inventoryService.updateProduct(this.product.id, formData)
    .subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate([`/products`]);
        Swal.fire({
          icon: 'success',
          title: 'Produto editado com sucesso!',
          showConfirmButton: false,
          timer: 1050
        })
      },

      error: (err) => console.log(err)
      
      
    })
  }
}
