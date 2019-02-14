import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrls: ['./more-information.component.css']
})
export class MoreInformationComponent implements OnInit {
  
  inform : string[];
  tittle : string = "";
  url : string = "";

  constructor() { }

  ngOnInit() {
    var datt = sessionStorage.getItem('dato');
    if(datt != null)
       this.inform = datt.split('\n');
    this.tittle = sessionStorage.getItem('tittle');
    this.url = sessionStorage.getItem('url');
    sessionStorage.clear();
  }

}
