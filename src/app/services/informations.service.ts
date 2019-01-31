import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Datatext } from '../model/datatext';

@Injectable({
  providedIn: 'root'
})
export class InformationsService {

  information : AngularFireList<any>;
  constructor( public firebase : AngularFireDatabase) { }

  getInformation(){
      this.information = this.firebase.list('/cardInformation');
      return this.information;
  }

  getOneDataFirebase(key : string){
   /* this.information = this.firebase.list('/cardInformation', ref => ref.equalTo(key));
    console.log('onfo' + this.information);
    var ddd = this.information;
    ddd.snapshotChanges().subscribe(item => {
      this.cardList = [];
      item.forEach( element =>{
        var y = element.payload.toJSON();
        y["$key"] = element.key;
        this.cardList.push(y as Datatext);
      });
  });*/
  }
  
}
