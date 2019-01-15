import { Component, OnInit } from '@angular/core';
import {
  state,
  trigger,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '125px',
        // opacity: 1,
        // backgroundColor: '#d8d9d859'
        backgroundColor: 'rgba(216, 217, 216, 1)'
      })),
      state('closed', style({
        height: '0',
        opacity: 0,
        backgroundColor: '#FFF'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit() {}

  displayMenu() {
    this.showMenu = !this.showMenu;
  }

}
