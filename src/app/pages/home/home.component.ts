import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material';
import * as Constants from '../../globals/Constants';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  private saveName = 'IHM_Need';

  public events = Constants.TARGET_EVENTS;

  @ViewChild('ownInput', {static: false})
  public ownInput: any;

  @ViewChild('needInput', {static: false})
  public needInput: any;

  @ViewChild('whenInput', {static: false})
  public whenInput: any;

  @ViewChild(MatDatepicker, {static: false}) datepicker: MatDatepicker<Date>;

  public when = new Date().toISOString();
  public scrollsOwned = 0;
  public scrollsNeeded = 0;
  public daysLeft = 0;

  public customEvent = {
    event: 'Custom target',
    date: '2020-02-14T23:00:00.000Z',
    neededPerRound: 550,
    maxRounds: 4,
    duration: 0,
  };


  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.load();
    }, 1);
  }

  public changeScrollsOwned(event) {
    this.scrollsOwned = event.target.value;
    this.calculate();
  }

  public changeScrollsNeeded(event) {
    this.scrollsNeeded = event.target.value;
    this.calculate();
  }

  public changeDate(event) {
    this.when = event.value;
    this.calculate();
  }

  public calculate() {
    this.daysLeft = Math.floor(( Date.parse(this.when) - Date.parse(new Date().toDateString()) ) / 86400000);
    if (this.daysLeft < 0) {
      this.daysLeft = 0;
    }

    this.customEvent = {
      event: 'Custom target',
      date: this.when,
      neededPerRound: Number(this.scrollsNeeded),
      maxRounds: 1,
      duration: 0,
    };

    this.save();
  }

  public calculateDaysLeft(date) {
    return Math.floor(( Date.parse(date) - Date.parse(new Date().toDateString()) ) / 86400000);
  }

  public save() {
    const save = {
      date: this.when,
      scrollsOwned: this.scrollsOwned,
      scrollsNeeded: this.scrollsNeeded,
    };
    localStorage.setItem(this.saveName, JSON.stringify(save));
  }

  public load() {
    const save = JSON.parse(localStorage.getItem(this.saveName));
    if (save) {
      if (save.date) {
        this.when = save.date;
      }
      if (save.scrollsOwned) {
        this.scrollsOwned = save.scrollsOwned;
      }
      if (save.scrollsNeeded) {
        this.scrollsNeeded = save.scrollsNeeded;
      }
    }

    this.calculate();
  }

}
