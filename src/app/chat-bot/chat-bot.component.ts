import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';

import { Chatbot } from '../model/chatbot';
import { stringify } from 'querystring';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  chatMy : string = '';
  show : boolean = true;
  listChatMssg : Chatbot[];

  constructor( public services : ChatbotService ) { }

  ngOnInit() {
   
  }

  onSendMessage(buttonMsg? : string){
     // console.log('datos' + this.chatMy );
      // this.services.talk(); 
      if(buttonMsg != undefined){
        this.services.onSaveMessage(buttonMsg);
      }else{
        this.services.onSaveMessage(this.chatMy);
      }
      this.listChatMssg = this.services.updateData();
      this.chatMy = '';    
  }

  onChangedButton( flag : string){
     if(flag == "true"){
         this.show = true;
         this.listChatMssg = [];
         this.services.onCLoseWindow();
     }else{
        let itemsFirst = [{
             'chat':'!Hola¡ soy terapy_Bot, para ayudarte en lo que necesites.',
             'sentBy' : 'bot'
        },
        {
          'chat':'presiona cualquiera de estos dos botones para continuar, o has me cualquier consulta.',
          'sentBy' : 'bot'
        }];
         this.listChatMssg = itemsFirst;
         this.show = false;
         this.services.firstMsg(itemsFirst);

     }
      
  }

}
