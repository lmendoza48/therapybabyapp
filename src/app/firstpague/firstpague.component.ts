import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-firstpague',
  templateUrl: './firstpague.component.html',
  styleUrls: ['./firstpague.component.css']
})
export class FirstpagueComponent implements OnInit {
  
  constructor(public router : Router) { }

  ngOnInit() {
  }

  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }






  
 /** Old version of the method, not used */
  onClickData( flag? : string){
   // this.sidenav.close();
    if(flag != undefined )
        this.router.navigate(['/'+flag]);
  }

}
