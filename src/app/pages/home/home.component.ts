import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('checkbox', {static: false})
  public ownInput: any;

  @ViewChild('checkbox', {static: false})
  public needInput: any;

  @ViewChild('checkbox', {static: false})
  public whenInput: any;

  constructor() { }

  ngAfterViewInit() {
  }

}
