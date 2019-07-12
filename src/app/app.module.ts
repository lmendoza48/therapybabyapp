import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {SlideshowModule} from 'ng-simple-slideshow';

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
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { ChatbotService } from './services/chatbot.service';
import { CarruselImgComponent } from './firstpague/carrusel-img/carrusel-img.component';
import { GaleryIMGComponent } from './firstpague/galery-img/galery-img.component';
import { PopupIMGComponent } from './firstpague/galery-img/popup-img/popup-img.component';
import { SecondSectionComponent } from './firstpague/second-section/second-section.component';
import { ThirdSectionComponent } from './firstpague/third-section/third-section.component';

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
    path:'galery',
    component: GaleryIMGComponent
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
    ChatBotComponent,
    CarruselImgComponent,
    GaleryIMGComponent,
    PopupIMGComponent,
    SecondSectionComponent,
    ThirdSectionComponent
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
    SlideshowModule,
    ReactiveFormsModule
  ],
  entryComponents:[
    PopupIMGComponent
  ],
  providers: [MessagesDatosService, ChatbotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
