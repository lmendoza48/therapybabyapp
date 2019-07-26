import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { PopupIMGComponent } from './popup-img/popup-img.component';
import { GaleryModel } from 'src/app/model/galery-model';
import { GaleryService } from 'src/app/services/galery.service';

@Component({
  selector: 'app-galery-img',
  templateUrl: './galery-img.component.html',
  styleUrls: ['./galery-img.component.css']
})
export class GaleryIMGComponent implements OnInit {
  
  dialogRef : MatDialogRef<PopupIMGComponent>;
  listGalery : GaleryModel[];

  constructor(public dialog: MatDialog, private servcsG : GaleryService) { }

  ngOnInit() {
    let ff = this.servcsG.getConectDbList();
    ff.snapshotChanges().subscribe( item => {
      this.listGalery = [];
      item.forEach(eln => {
        let ui = eln.payload.toJSON();
        ui["$key"] = eln.key;
        this.listGalery.push(ui as GaleryModel);
      });
    });

  }


  openDialog(item : GaleryModel): void {
    const dialogRef = this.dialog.open(PopupIMGComponent, {
      width: '70rem',
      data : item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
