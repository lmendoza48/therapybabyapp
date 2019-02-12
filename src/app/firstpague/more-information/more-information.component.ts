import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-more-information',
  templateUrl: './more-information.component.html',
  styleUrls: ['./more-information.component.css']
})
export class MoreInformationComponent implements OnInit {
  
  inform : string = "";
  tittle : string = "";
  url : string = "";

  constructor() { }

  ngOnInit() {
    this.inform = sessionStorage.getItem('dato');
    this.tittle = sessionStorage.getItem('tittle');
    this.url = sessionStorage.getItem('url');
    sessionStorage.clear();
  }

}
