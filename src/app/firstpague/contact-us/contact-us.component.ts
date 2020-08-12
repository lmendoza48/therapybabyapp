import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { NgForm, FormControl, FormGroup } from '@angular/forms';
import { SavemessageService } from 'src/app/services/savemessage.service';
import { MessagesDatosService } from 'src/app/services/messages-datos.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  
  /** Esto es para envio directo de email*/
  url = 'https://therapyapp-6edb2.firebaseio.com/function';

  contactForm = {
    nameForm : '',
    asuntForm : '',
    emailForm : '',
    comentForm : '',
  } 
       


  constructor(public dataServiceMessage : SavemessageService, private snackBar : MatSnackBar,
    public dataService : MessagesDatosService) { }

  ngOnInit() {
    //necessary for initializer object firebase
    this.dataServiceMessage.getMessage();
  }

  onSendEMail(form : NgForm){
    let mailValidation = form.value.emailForm;
    if(mailValidation.includes("@")){
      let sessionMessage = sessionStorage.getItem("messagueCount");
      if( sessionMessage === null ){
        this.dataServiceMessage.insertDataMessage(form.value);
        sessionStorage.setItem("messagueCount","0");
        form.reset();
        const message = 'Información enviada...';
        const action = '¡Gracias!';
        this.openSnackBar(message,action);
      }else{
        const message = 'No puede enviar mas de un mensaje...';
        const action = 'ERROR!'
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
  openSnackBar(message: string, action : string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  sendEmailBYNodejs(form?: NgForm){
    this.dataService.sendMessage(form.value).subscribe((datos)=>{
      form.reset();
      console.log('datos enviados ',datos);
   });
  }

  sendEmailByFirestore(form?: NgForm){
    this.dataService.sendEmailWithFirestore(form.value);
  }

  /*
     version open dialog
      openDialog(): void {
    this.dialogRef = this.dialog.open(PopupAnswerComponent, {
      width: '50rem'
    });
    this.dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed' + result );
     /* if(result != undefined){
        this.onItemClick(result);
       }
      });
     }  
   */

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
