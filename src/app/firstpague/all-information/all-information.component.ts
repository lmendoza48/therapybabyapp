import { Component, OnInit } from '@angular/core';
import { Datatext } from 'src/app/model/datatext';
import { InformationsService } from 'src/app/services/informations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-information',
  templateUrl: './all-information.component.html',
  styleUrls: ['./all-information.component.css']
})
export class AllInformationComponent implements OnInit {

  cardList : Datatext[];
  datafilter = "";

  constructor(public allCardInfo : InformationsService, public router : Router) { }

  ngOnInit() {
    var obj = this.allCardInfo.getInformation();
    obj.snapshotChanges().subscribe(item => {
        this.cardList = [];
        item.forEach( element =>{
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.cardList.push(y as Datatext);
        });
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

}
