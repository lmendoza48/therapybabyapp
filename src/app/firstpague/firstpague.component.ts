import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-firstpague',
  templateUrl: './firstpague.component.html',
  styleUrls: ['./firstpague.component.css']
})
export class FirstpagueComponent implements OnInit {
  
  
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  reason = '';

  constructor(public router : Router) { }

  ngOnInit() {
  }


  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }



  openToggle(navig? : String){
    this.sidenav.close();
    this.router.navigate(['/'+navig]);
  }


  
 /** Old version of the method, not used */
  onClickData( flag? : string){
   // this.sidenav.close();
    if(flag != undefined )
        this.router.navigate(['/'+flag]);
  }

}
