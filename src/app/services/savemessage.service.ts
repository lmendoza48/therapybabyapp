import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MessageData } from '../model/message-data';

@Injectable({
  providedIn: 'root'
})
export class SavemessageService {

  message : AngularFireList<any>;
  dataMessage  : MessageData  = new MessageData();

  constructor(public firebase : AngularFireDatabase) { }

  getMessage(){
    this.message = this.firebase.list('/dataMessage');
    return this.message;
  }

  insertDataMessage(data : MessageData){
       var dateD = Date.now();
       data.day = dateD;
       data.title = data.name + ", " + data.title
       this.message.push({
          title : data.title,
          alltext : data.alltext,
          mail : data.mail,
          day : data.day
       })
  }

}
