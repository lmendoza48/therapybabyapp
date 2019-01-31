import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagesDatosService {

  constructor(private httpClient : HttpClient) { }

  sendMessage(body){
      return this.httpClient.post('http://localhost:3000/formulario', body);
  }
}
