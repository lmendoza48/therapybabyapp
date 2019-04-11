import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SavemessageService } from 'src/app/services/savemessage.service';

@Component({
  selector: 'app-popup-answer',
  templateUrl: './popup-answer.component.html',
  styleUrls: ['./popup-answer.component.css']
})
export class PopupAnswerComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<PopupAnswerComponent>, public dataServiceMessage : SavemessageService) { }

  ngOnInit() {
    this.dataServiceMessage.getMessage();
  }
  
  onSendEMail(form : NgForm){
    this.dataServiceMessage.insertDataMessage(form.value);
    form.reset();
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
  
  onCloseDialog(): void {
    this.resetForm();
    this.dialogRef.close();
  }

}
