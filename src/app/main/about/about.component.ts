import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * open resume
   */
  openPDF() {
    window.open('../../../assets/other/resume.pdf', ); // move to file
  }
}
