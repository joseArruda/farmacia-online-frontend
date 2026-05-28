import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, FormsModule, RouterLinkActive ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  search: string = '';
  isCartPage = false;

  categories = [
    'analgesicos',
    'medicamentos',
    'antialergicos',
    'vitaminas',
    'higiene',
    'dermatologia',
    'infantil'
  ]

  constructor(
    public router: Router
  ){}

  @Output() eventText = new EventEmitter<string>();
  @Output() eventCategory = new EventEmitter<string>();

  searchText(){
    this.eventText.emit(this.search);
  }

  setCategory(){
    this.eventCategory.emit(this.search);
  }
}
