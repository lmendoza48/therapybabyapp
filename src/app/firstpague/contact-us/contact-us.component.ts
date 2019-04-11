import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SavemessageService } from 'src/app/services/savemessage.service';
import { PopupAnswerComponent } from './popup-answer/popup-answer.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  url = 'https://therapyapp-6edb2.firebaseio.com/function';
  dialogRef : MatDialogRef<PopupAnswerComponent>;
  
  constructor(public dataServiceMessage : SavemessageService, public dialog : MatDialog) { }

  ngOnInit() {
    this.dataServiceMessage.getMessage();
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(PopupAnswerComponent, {
      width: '50rem'
    });
    this.dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed' + result );
     /* if(result != undefined){
        this.onItemClick(result);
      }*/
    });
  }
  
  onSendEMail(form : NgForm){
    this.dataServiceMessage.insertDataMessage(form.value);
    form.reset();
  }

  /*
   onSendEMail(form : NgForm){
      this.dataServiceMessage.insertDataMessage(form.value);
      form.reset();
  }
  
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
