import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GaleryModel } from 'src/app/model/galery-model';

@Component({
  selector: 'app-popup-img',
  templateUrl: './popup-img.component.html',
  styleUrls: ['./popup-img.component.css']
})
export class PopupIMGComponent implements OnInit {
  
  imageGaleryArray = [];

  constructor(public dialogRef : MatDialogRef<PopupIMGComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GaleryModel) { }

  ngOnInit() {
    let dd = this.data.urlCarrusel;
    Object.entries(dd).forEach(([key, value]) => {
         this.imageGaleryArray.push(value); 
       }
    );
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

}
