import { Component, OnInit } from '@angular/core';
import { ChatbotService } from '../services/chatbot.service';

import { Chatbot } from '../model/chatbot';

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

  onSendMessage(){
      console.log('datos' + this.chatMy );
      // this.services.talk(); 
      this.services.onSaveMessage(this.chatMy);
      this.listChatMssg = this.services.updateData();
      this.chatMy = '';    
  }

  onChangedButton( flag : string){
     if(flag == "true"){
         this.show = true;
         this.listChatMssg = [];
         this.services.onCLoseWindow();
     }else{
         this.show = false;
     }
      
  }

}
