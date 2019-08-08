import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-group',
  templateUrl: './monthly-group.component.html',
  styleUrls: ['./monthly-group.component.scss']
})
export class MonthlyGroupComponent implements OnInit {

  public groupData;

  @Input()
  set data(data) {
    this.groupData = data;
  }

  constructor() { }

  ngOnInit() {
  }

}
