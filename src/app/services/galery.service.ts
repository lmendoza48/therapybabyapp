import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { GaleryModel } from '../model/galery-model';

@Injectable({
  providedIn: 'root'
})
export class GaleryService {
  
  private conectDBGalery : AngularFireList<any>;
  dbDataGalery : GaleryModel = new GaleryModel();

  constructor(private dbFirebase : AngularFireDatabase) { }

  getConectDbList(){
    return this.conectDBGalery = this.dbFirebase.list('/galeriadb');
  }
}
