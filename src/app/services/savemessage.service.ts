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
       data.title = data["nameForm"] + ", " + data["asuntForm"];
       this.message.push({
          title : data.title,
          alltext : data["comentForm"],
          mail : data["emailForm"],
          day : data.day,
          flag : true,
       })
  }

}
