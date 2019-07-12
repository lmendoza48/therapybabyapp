import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-popup-img',
  templateUrl: './popup-img.component.html',
  styleUrls: ['./popup-img.component.css']
})
export class PopupIMGComponent implements OnInit {
  
  imageGaleryArray = [];

  constructor(public dialogRef : MatDialogRef<PopupIMGComponent>) { }

  ngOnInit() {
    this.imageGaleryArray = [
      "https://res.cloudinary.com/dqqmkhxna/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1562683153/new%20carpet/IMG_20190526_112749364_upo3le.jpg",
      "https://res.cloudinary.com/dqqmkhxna/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1562683156/new%20carpet/IMG_20190526_112039671_mtw1do.jpg",
      "https://res.cloudinary.com/dqqmkhxna/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1562683156/new%20carpet/IMG_20190526_112052847_kc5s0e.jpg",
      "https://res.cloudinary.com/dqqmkhxna/image/upload/v1562683156/new%20carpet/IMG_20190526_134024140_HDR_kkwhbv.jpg",
      "https://res.cloudinary.com/dqqmkhxna/image/upload/v1562683154/new%20carpet/IMG_20190526_112421835_nrdhlz.jpg",
      "https://res.cloudinary.com/dqqmkhxna/image/upload/v1562683153/new%20carpet/IMG_20190526_140148063_HDR_t6l8y0.jpg"];
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

}
