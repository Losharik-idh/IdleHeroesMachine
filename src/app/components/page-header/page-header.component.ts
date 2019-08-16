import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @ViewChild('hamburger', {static: false})
  public menuButton: any;


  public isMenuActive = false;

  constructor() { }

  ngOnInit() {
  }

  public toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    if (this.isMenuActive) {
      this.menuButton.nativeElement.classList.add('is-active');
    } else {
      this.menuButton.nativeElement.classList.remove('is-active');
    }
  }

}
