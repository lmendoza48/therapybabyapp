import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Chatbot } from '../model/chatbot';
import { Subject, Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  
  readonly token = environment.dialogFlow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});
  private chatmssgList$ = new Subject<Chatbot[]>();

  chatMssgList : Chatbot[] = [];
  flagChat : boolean = false;

  constructor() { }

  onSaveMessage(mgs : string){
    if(mgs != 'Terapia' && !mgs.includes('Contacto')){
       this.updateData(mgs, 'user');
    }   
    return this.client.textRequest(mgs)
        .then((res) => 
                {
                  const speech = res.result.fulfillment.speech;
                  this.updateData(speech, 'bot');
                })
        .catch((error) => {
            this.updateData('Tenemos un error espere un momento', 'bot')        
        });
}

onCLoseWindow(){
    this.chatMssgList = [];
    this.flagChat = false;
}

firstMsg(arrayD){
  this.chatMssgList = arrayD;
  this.chatmssgList$.next(this.chatMssgList);
}


updateData(msg? : string, sentBy? : string){

  if(msg != undefined &&  sentBy != undefined ){
      this.chatMssgList.push({
        sentBy: sentBy,
        chat: msg
      });

      this.chatmssgList$.next(this.chatMssgList);
  }
  return this.chatMssgList;

}

getUpdateMsg$() : Observable<Chatbot[]>{
  return this.chatmssgList$.asObservable();
}


  /** 
   * used in method firstMsg()
   * /* return this.client.textRequest(msg).then((res)=>{
      const firstmsg = res.result.fulfillment.speech;  
      this.updateData(firstmsg,'bot')
    }).catch((error)=>{
      this.updateData('No puedo entender lo que me dices', 'bot')  
    })
    
    talk(mgs? : string){
    this.client.textRequest('nuevo')
          .then((res) => console.log(res))
          .catch((error) => console.log(error))
  }
  */

}
