import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpague',
  templateUrl: './firstpague.component.html',
  styleUrls: ['./firstpague.component.css']
})
export class FirstpagueComponent implements OnInit {
  
  @ViewChild('sidenav') sidenav: MatSidenav; 
  
  constructor(public router : Router) { }

  ngOnInit() {
  }

  onClickData( flag? : string){
    this.sidenav.close();
    if(flag != undefined )
        this.router.navigate(['/'+flag]);
  }

}
