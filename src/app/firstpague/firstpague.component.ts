import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpague',
  templateUrl: './firstpague.component.html',
  styleUrls: ['./firstpague.component.css']
})
export class FirstpagueComponent implements OnInit {
  
  
  constructor(public router : Router) { }

  ngOnInit() {
  }

 /** Old version of the method, not used */
  onClickData( flag? : string){
   // this.sidenav.close();
    if(flag != undefined )
        this.router.navigate(['/'+flag]);
  }

}
