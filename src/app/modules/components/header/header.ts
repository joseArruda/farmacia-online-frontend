import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  search: string = '';

  constructor(
    public router: Router
  ){}

  @Output() eventText = new EventEmitter<string>();

  searchText(){
    this.eventText.emit(this.search);
  }
}
