import { Component, OnInit, Inject } from '@angular/core';
import { Datatext } from 'src/app/model/datatext';
import { InformationsService } from 'src/app/services/informations.service';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-all-information',
  templateUrl: './all-information.component.html',
  styleUrls: ['./all-information.component.css']
})
export class AllInformationComponent implements OnInit {

  cardList : Datatext[];
  cardListFilter : Datatext[];
  datafilter = "";
  flagProgress: boolean = true;
  flagFilter = false;

  constructor(@Inject(DOCUMENT) private document: Document, public allCardInfo : InformationsService, public router : Router) { }

  ngOnInit() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
    var obj = this.allCardInfo.getInformation();
    obj.snapshotChanges().subscribe(item => {
        this.cardList = [];
        item.forEach( element =>{
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.cardList.push(y as Datatext);
        });
       this.cardListFilter = this.cardList;
       this.flagProgress = false;
    });
  }

  onItemClick(data : Datatext){
      sessionStorage.setItem('dato',  data.alltext);
      sessionStorage.setItem('tittle',  data.title);
      sessionStorage.setItem('url',  data.urlImg);
      sessionStorage.setItem('keyText', data.$key);
      if(data["like"] != undefined){
        sessionStorage.setItem('like', data["like"] );
      }
      if(data["NotLike"] != undefined){
        sessionStorage.setItem('NotLike', data["NotLike"] );
      }
      this.router.navigate(['/information']);
      //this.allCardInfo.getOneDataFirebase(data.$key);
  }

  clearFilter(){
    this.cardListFilter = this.cardList.filter(item => {
      return item.title.toLowerCase().indexOf(this.datafilter.toLowerCase()) > -1;
    });
    
    if(this.cardListFilter.length > 0){
      this.flagFilter = false;
    }else{
      this.flagFilter = true;
    }

  }

}
