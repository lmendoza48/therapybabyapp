import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { MessagesDatosService } from 'src/app/services/messages-datos.service';
import { NgForm } from '@angular/forms';
import { SavemessageService } from 'src/app/services/savemessage.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  url = 'https://therapyapp-6edb2.firebaseio.com/function';
  
  constructor(public dataServiceMessage : SavemessageService) { }

  ngOnInit() {
    this.dataServiceMessage.getMessage();
  }

  onSendEMail(form : NgForm){
      this.dataServiceMessage.insertDataMessage(form.value);
      form.reset();
  }

  /*
      ***** otros datos email ***** 
       construct (public dataService : MessagesDatosService)
      this.dataService.sendMessage(form.value).subscribe(()=>{
          form.reset();
          console.log('datos enviados');
      });
      ****************************
  console.log('data' + this.name  + this.comment + this.toMail);
    
    let url = 'https://therapyapp-6edb2.firebaseio.com/functions'
    let params: URLSearchParams = new URLSearchParams();

    params.set('to', 'lmendoza@aconcaguabs.com');
    params.set('from', this.toMail);
    params.set('subject', this.name);
    params.set('content', this.comment);

    return this.http.post(url, params)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })*/

}
