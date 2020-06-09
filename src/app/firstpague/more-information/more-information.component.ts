import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { InformationsService } from 'src/app/services/informations.service';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrls: ['./more-information.component.css']
})
export class MoreInformationComponent implements OnInit {
  
  inform : string[];
  tittle : string = "";
  url : string = "";
  stringKey : string = "";
  like : number;
  notLike : number;

  constructor(@Inject(DOCUMENT) private document: Document, public router : Router, public servicesInformation : InformationsService) { }

  ngOnInit() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
    let listText = sessionStorage.getItem('dato');
    if(listText != null){
      this.inform = listText.split('\n');
    }else{
      this.router.navigate(['/allInformation']);
    }
    this.like = +sessionStorage.getItem('like');
    this.notLike = +sessionStorage.getItem('NotLike');  
    this.tittle = sessionStorage.getItem('tittle');
    this.url = sessionStorage.getItem('url');
    this.stringKey = sessionStorage.getItem('keyText')
    sessionStorage.clear();
  }

  onSendLikeNotLike(LikeNotlike : boolean){
    let keyData = this.stringKey;
    let flagLike = sessionStorage.getItem('flagLike');
    let flagNotLike = sessionStorage.getItem('flagNotLike');
        if(LikeNotlike && flagLike == null ){
            //this like
            sessionStorage.setItem('flagLike', 'true');
            let numberLike = ++this.like  ;
            this.servicesInformation.saveLikeNotLike(keyData, numberLike,LikeNotlike);
        }else if(!LikeNotlike && flagNotLike == null){
            sessionStorage.setItem('flagNotLike', 'true');
            let numberNotLike = ++this.notLike;
            this.servicesInformation.saveLikeNotLike(keyData, numberNotLike,LikeNotlike);
        }
  }

  onSendQuestion(){
    sessionStorage.setItem('question',  this.tittle);
    this.router.navigate(['/contactus']);
    
  }
}
