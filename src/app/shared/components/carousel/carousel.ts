import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [ NgFor ],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {
  images = [
  'assets/images/slider1.png',
  'assets/images/slider2.png',
  'assets/images/slider3.png'
];

currentIndex = 0;

next(){
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
}

prev(){
  this.currentIndex =
    (this.currentIndex - 1 + this.images.length) % this.images.length;
}

goTo(index:number){
  this.currentIndex = index;
}

ngOnInit(){
  setInterval(()=>{
    this.next();
  }, 4000);
}
}
