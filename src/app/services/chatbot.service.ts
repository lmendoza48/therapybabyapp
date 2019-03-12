import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Chatbot } from '../model/chatbot';
 
@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  
  readonly token = environment.dialogFlow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  chatMssgList : Chatbot[] = [];

  constructor() { }

  onSaveMessage(mgs : string){
    this.updateData(mgs, 'user');
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


updateData(msg? : string, sentBy? : string){

  if(msg != undefined &&  msg != undefined )
      this.chatMssgList.push({
        sentBy: sentBy,
        chat: msg
   })

  return this.chatMssgList;

}

onCLoseWindow(){
    this.chatMssgList = [];

}

  /** talk(mgs? : string){
    this.client.textRequest('nuevo')
          .then((res) => console.log(res))
          .catch((error) => console.log(error))
  }
  */
}
