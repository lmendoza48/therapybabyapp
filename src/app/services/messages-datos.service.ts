import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MessagesDatosService {

  constructor(private httpClient : HttpClient, 
              public firebase : AngularFirestore) { }


  sendEmailWithFirestore(body: any){
      let name = body.nameForm;
      let email = body.emailForm;
       this.firebase.collection("sendemail_1").add({name,email}).then(data => {
          console.info('info ', data);
      })

  }

  sendMessage(body){
      return this.httpClient.post('https://serve-email.herokuapp.com/formulario', body);
  }
}
