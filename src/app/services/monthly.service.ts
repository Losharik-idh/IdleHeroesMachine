import { Injectable } from '@angular/core';
import { SaveUpdateClass } from './update/save-update-class';
import * as Constants from '../globals/Constants';
import { ScrollDataGroup } from '../globals/interfaces';

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

  private handlesWithDynamicIncome = new Set();

  private updateSave = new SaveUpdateClass();

  private aspenScrollsBaroness = 0;
  private aspenScrollsOldLady = 0;

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
    this.calculateTotalOrbs();
    this.save();
  }

  private checkForDynamicValues(data) {

  }

  public removeMonthlyData(data) {
    const handle = data.handle;
    delete this.montlyData[handle];
    delete this.montlyDataOrbs[handle];
    this.calculateTotalScrolls();
    this.calculateTotalOrbs();
    this.save();
  }

  public getIfSelected(handle) {
    return this.montlyData[handle] !== undefined;
  }

  public setAspenScrollsBaroness(amount) {
    this.aspenScrollsBaroness = amount;
    this.calculateTotalScrolls();
  }

  public setAspenScrollsOldLady(amount) {
    this.aspenScrollsOldLady = amount;
    this.calculateTotalScrolls();
  }

  public calculateTotalScrolls() {
    this.total = 0;
    Object.entries(this.montlyData).forEach((data: any) => {
      const handle = data[0];
      const amount = Number(data[1]);
      this.total += amount;

      if (this.handlesWithDynamicIncome.has(handle)) {
        this.total -= amount;
        if (handle === 'fromAsperDungeonWhenMediorHasScroll') {
          // this.total += this.aspenScrollsBaroness;
        }
        if (handle === 'fromAsperDungeonWhenSeniosHasScroll') {
          // this.total += this.aspenScrollsOldLady;
        }
      }
    });
  }

  public calculateTotalOrbs() {
    this.totalOrbs = 0;
    Object.values(this.montlyDataOrbs).forEach((amount: number) => {
      this.totalOrbs += amount;
    });
  }

  public save() {
    localStorage.setItem(this.saveName, JSON.stringify(this.montlyData));
    localStorage.setItem(this.saveNameOrbs, JSON.stringify(this.montlyDataOrbs));
  }

  private generateDynalicValueSet() {
    const dataGroup = Constants.MONTHLY_SCROLLS_DATA;
    Object.values(dataGroup).forEach((groupData: ScrollDataGroup) => {
      groupData.subdata.forEach((data) => {
        if (data.hasOwnProperty('dynamicIncome') && data.dynamicIncome) {
          this.handlesWithDynamicIncome.add(data.handle);
        }
      });
    });
  }

  public load() {
    this.generateDynalicValueSet();

    this.montlyData = JSON.parse(localStorage.getItem(this.saveName));
    if (!this.montlyData) {
      this.montlyData = {};
    }
    this.montlyData = this.updateSave.updateScrollSaveData(this.montlyData);

    this.montlyDataOrbs = JSON.parse(localStorage.getItem(this.saveNameOrbs));
    if (!this.montlyDataOrbs) {
      this.montlyDataOrbs = {};
    }
    this.montlyDataOrbs = this.updateSave.updateOrbSaveData(this.montlyDataOrbs);

    this.calculateTotalScrolls();
  }
}
