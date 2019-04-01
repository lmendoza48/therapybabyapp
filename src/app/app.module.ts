import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { AppComponent } from './app.component';
import { FirstpagueComponent } from './firstpague/firstpague.component';
import { MaterialComponent } from './angularMaterial/material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactUsComponent } from './firstpague/contact-us/contact-us.component';
import { HomeComponent } from './firstpague/home/home.component';
import { MoreInformationComponent } from './firstpague/more-information/more-information.component';
import { MessagesDatosService } from './services/messages-datos.service';
import { AllInformationComponent } from './firstpague/all-information/all-information.component';
import { environment } from 'src/environments/environment';
import { WhousComponent } from './firstpague/whous/whous.component';
import { OfferItComponent } from './firstpague/offer-it/offer-it.component';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { ChatbotService } from './services/chatbot.service';
import { SliderModule } from 'angular-image-slider';

const routes : Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'contactus',
    component: ContactUsComponent
  },
  {
    path:'information',
    component: MoreInformationComponent
  },
  {
    path:'allInformation',
    component: AllInformationComponent
  }
  ,
  {
    path:'pruebaChatBot',
    component: ChatBotComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FirstpagueComponent,
    ContactUsComponent,
    HomeComponent,
    MoreInformationComponent,
    AllInformationComponent,
    WhousComponent,
    OfferItComponent,
    ChatBotComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponent,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.configFirebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    SliderModule
  ],
  providers: [MessagesDatosService, ChatbotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
