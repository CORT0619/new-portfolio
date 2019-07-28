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
        height: '13rem',
        opacity: 1,
        backgroundColor: 'rgba(216, 217, 216, 0.92)'
      })),
      state('closed', style({
        height: '0',
        opacity: 0,
      })),
      transition('open <=> closed', [
        animate('1s')
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
