import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-group',
  templateUrl: './monthly-group.component.html',
  styleUrls: ['./monthly-group.component.scss']
})
export class MonthlyGroupComponent implements OnInit {

  public groupData;
  public setRegister;

  public groupedInputs = [];

  @Input()
  set data(data) {
    this.groupData = data;
    if (this.groupData.selectOneOnly) {
      this.setRegister = this.registerToGroup;
    }
  }

  constructor() { }

  ngOnInit() {
  }

  public registerToGroup = (handle: string, deselect: any) => {
    this.groupedInputs.push({
      handle,
      deselect,
    });
    return this.setSelection;
  }

  public setSelection = (handle) => {
    this.groupedInputs.forEach((group) => {
      if (group.handle !== handle) {
        group.deselect();
      }
    });
  }

}
