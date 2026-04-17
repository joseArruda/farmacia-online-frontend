import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FormsModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  search: string = '';
  isCartPage = false;

  constructor(
    public router: Router
  ){}

  @Output() eventText = new EventEmitter<string>();

  searchText(){
    this.eventText.emit(this.search);
  }
}
