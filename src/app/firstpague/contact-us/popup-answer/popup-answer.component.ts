import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SavemessageService } from 'src/app/services/savemessage.service';

@Component({
  selector: 'app-popup-answer',
  templateUrl: './popup-answer.component.html',
  styleUrls: ['./popup-answer.component.css']
})
export class PopupAnswerComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<PopupAnswerComponent>, public dataServiceMessage : SavemessageService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataServiceMessage.getMessage();
  }
  
  onSendEMail(form : NgForm){
    let mailValidation = form.value.mail;
    if(mailValidation.includes("@")){
      let sessionMessage = sessionStorage.getItem("messagueCount");
      if( sessionMessage === null ){
        this.dataServiceMessage.insertDataMessage(form.value);
        sessionStorage.setItem("messagueCount","0");
        form.reset();
        const message = 'Información enviada...';
        const action = '¡Gracias!';
        this.onCloseDialog();
        this.openSnackBar(message,action);
      }else{
        const message = 'No puede enviar mas de un mensaje...';
        const action = 'ERROR!'
        this.onCloseDialog();
        this.openSnackBar(message,action);
      }
    }else{
      const message = 'El campo de Email no tiene el formato correcto';
      const action = 'ERROR!'
      this.openSnackBar(message,action);
    }
        
  }

  resetForm(form? : NgForm)
  {
    if(form != null)
      form.reset();
    this.dataServiceMessage.dataMessage = {
      $key : null,
      title : '',
      alltext : '',
      mail : '',
      day : Date.now(),
      name : '',
      flag : false,
    }
  }
  
  onCloseDialog(){
    this.resetForm();      
    this.dialogRef.close();
  }

  openSnackBar(message: string, action : string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
