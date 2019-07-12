import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PopupIMGComponent } from './popup-img/popup-img.component';

@Component({
  selector: 'app-galery-img',
  templateUrl: './galery-img.component.html',
  styleUrls: ['./galery-img.component.css']
})
export class GaleryIMGComponent implements OnInit {
  
  dialogRef : MatDialogRef<PopupIMGComponent>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(PopupIMGComponent, {
      width: '70rem',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    //  this.animal = result;
    });
  }

}
