import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.css'],
  animations: [
    trigger('scrollAnimationThird', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(-100%)"
      })),
      transition('show => hide', animate('1100ms ease-out')),
      transition('hide => show', animate('1100ms ease-in'))
    ]),
    trigger('scrollAnimationThirdIMG', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(100%)"
      })),
      transition('show => hide', animate('1100ms ease-out')),
      transition('hide => show', animate('1100ms ease-in'))
    ])
  ]
})
export class ThirdSectionComponent implements OnInit {
  
  state = 'hide'

  constructor(public el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop
    const scrollPosition = window.pageYOffset

    if (scrollPosition >= componentPosition) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }

  }

}
