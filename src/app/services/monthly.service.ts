import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MonthlyService {

  public montlyData;
  public total = 0;
  private saveName = 'IHM_Monthly';

  constructor() {
    this.load();
  }

  public changeMonthlyData(handle, scrolls) {
    this.montlyData[handle] = scrolls;
    this.calculateTotalScrolls();
  }

  public removeMonthlyData(handle) {
    delete this.montlyData[handle];
    this.calculateTotalScrolls();
  }

  public getIfSelected(handle) {
    return this.montlyData[handle] !== undefined;
  }

  public calculateTotalScrolls() {
    this.total = 0;
    Object.values(this.montlyData).forEach((amount:number) => {
      this.total += amount;
    });
    this.save();
  }

  public save() {
    localStorage.setItem(this.saveName, JSON.stringify(this.montlyData));
  }

  public load() {
    this.montlyData = JSON.parse(localStorage.getItem(this.saveName));
    if (!this.montlyData) {
      this.montlyData = {};
    }
    this.calculateTotalScrolls();
  }
}
