import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Inventary } from '../../services/inventary.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Header } from '../../modules/components/header/header';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  imports: [ FormsModule, NgIf, Header ],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
})
export class Edit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private inventaryService: Inventary,
    private router: Router
  ){}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)

    this.inventaryService.getById(id)
    .subscribe((data)=>{
      this.product = data
    })
  }

  updateProduct(){
    this.inventaryService.updateProduct(this.product.id, this.product)
    .subscribe(()=>{
      this.router.navigate(['/editproduct']);
      Swal.fire({
        icon: 'success',
        title: 'Produto editado com sucesso!',
        showConfirmButton: false,
        timer: 1050
      })
    })
  }
}
