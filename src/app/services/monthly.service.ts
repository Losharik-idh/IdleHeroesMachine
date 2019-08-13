import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthlyService {

  public montlyData;
  public total = 0;
  private saveName = 'IHM_Monthly';

  public montlyDataOrbs;
  public totalOrbs = 0;
  private saveNameOrbs = 'IHM_Monthly_Orbs';

  constructor() {
    this.load();
  }

  public changeMonthlyData(data) {
    const handle = data.handle;
    const scrolls = data.scrolls;
    const orbs = data.orbs;
    this.montlyData[handle] = scrolls;
    this.montlyDataOrbs[handle] = orbs;
    this.calculateTotalScrolls();
  }

  public removeMonthlyData(data) {
    const handle = data.handle;
    delete this.montlyData[handle];
    delete this.montlyDataOrbs[handle];
    this.calculateTotalScrolls();
  }

  public getIfSelected(handle) {
    return this.montlyData[handle] !== undefined;
  }

  public calculateTotalScrolls() {
    this.total = 0;
    Object.values(this.montlyData).forEach((amount: number) => {
      this.total += amount;
    });
    this.save();
  }

  public save() {
    localStorage.setItem(this.saveName, JSON.stringify(this.montlyData));
    localStorage.setItem(this.saveNameOrbs, JSON.stringify(this.montlyDataOrbs));
  }

  public load() {
    this.montlyData = JSON.parse(localStorage.getItem(this.saveName));
    if (!this.montlyData) {
      this.montlyData = {};
    }
    this.montlyDataOrbs = JSON.parse(localStorage.getItem(this.saveNameOrbs));
    if (!this.montlyDataOrbs) {
      this.montlyDataOrbs = {};
    }
    this.calculateTotalScrolls();
  }
}
