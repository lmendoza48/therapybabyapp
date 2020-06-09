import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel-img',
  templateUrl: './carrusel-img.component.html',
  styleUrls: ['./carrusel-img.component.css']
})
export class CarruselImgComponent implements OnInit {
  
  imageUrlArray = [];

  constructor() { }

  ngOnInit() {
    this.imageUrlArray = [
      "https://www.seymourhouse.co.uk/assets/images/background/speech.jpg",
      "https://www.kidztherapy.com/webimages/pages/contact_us/i_hero_contact_us_1.jpg",
      "http://trinityschool.wpengine.com/wp-content/uploads/2016/10/Trinity-2016-Spanish-Music-ECP-1400x600.jpg",
      "http://resonatecreative.org/wp-content/uploads/2018/02/MTphoto-32-print1400x500.jpg",
      "https://www.terapiavisualvalencia.es/wp-content/uploads/2018/11/nic3b1os-jugar-jardin-sl.jpg"];
  }

}
