import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inventary } from '../../services/inventary.service';
import { CommonModule } from '@angular/common';
import { Header } from '../../modules/components/header/header';

@Component({
  selector: 'app-product',
  imports: [CommonModule, Header],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  product: any
  constructor(
    private route: ActivatedRoute,
    private inventaryService: Inventary
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.inventaryService.getById(id).subscribe({
      next: (res) => {
        this.product = res;
        console.log('Produto carregado:', res);
      },
      error: (err) => console.error(err)
    });
  }
}
