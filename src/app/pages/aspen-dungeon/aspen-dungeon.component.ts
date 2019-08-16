import { AfterViewInit, Component } from '@angular/core';
import { MonthlyService } from '../../services/monthly.service';

@Component({
  selector: 'app-aspen-dungeon',
  templateUrl: './aspen-dungeon.component.html',
  styleUrls: ['./aspen-dungeon.component.scss']
})
export class AspenDungeonComponent implements AfterViewInit {

  private saveName = 'IHM_ASPEN_DUNGEON';

  public floorsCompleted = 0;

  public baronessScrolls = 0;
  public oldLadyScrolls = 0;
  public totalScrolls = 0;

  public baronessOrbs = 0;
  public oldLadyOrbs = 0;
  public totalOrbs = 0;

  constructor(private monthy: MonthlyService) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.load();
    }, 1);
  }

  private calculateAspenData() {
    const aspenDungeonsPerMonth = 365.25 / 12 / 4;
    const baronessScrollEncounterPercentage = 0.0615; // 6.15% for 5 scrolls
    const oldLadyScrollEncounterPercentage = 0.0231; // 2.31% for 10 scrolls

    const baronessOrbEncounterPercentage = 0.0321; // 3.21% for 1 orb
    const oldLadyOrbEncounterPercentage = 0.0077; // 0.77% for 5 orbs
    let merchantsEncountered = 0;


    if (this.floorsCompleted <= 300) {
      merchantsEncountered += (this.floorsCompleted * .15);
    } else {
      merchantsEncountered += (300 * .15);
      merchantsEncountered += ((this.floorsCompleted - 300) * .1);
    }


    this.baronessScrolls = (merchantsEncountered * baronessScrollEncounterPercentage) * 5 * aspenDungeonsPerMonth;
    this.oldLadyScrolls = (merchantsEncountered * oldLadyScrollEncounterPercentage) * 10 * aspenDungeonsPerMonth;
    this.totalScrolls = Math.floor(this.baronessScrolls + this.oldLadyScrolls);
    this.baronessScrolls = Math.floor(this.baronessScrolls);
    this.oldLadyScrolls = Math.floor(this.oldLadyScrolls);

    this.monthy.setAspenScrollsBaroness(this.baronessScrolls);
    this.monthy.setAspenScrollsOldLady(this.oldLadyScrolls);

    this.baronessOrbs = (merchantsEncountered * baronessOrbEncounterPercentage) * aspenDungeonsPerMonth;
    this.oldLadyOrbs = (merchantsEncountered * oldLadyOrbEncounterPercentage) * 5 * aspenDungeonsPerMonth;
    this.totalOrbs = Math.floor(this.baronessOrbs + this.oldLadyOrbs);
    this.baronessOrbs = Math.floor(this.baronessOrbs);
    this.oldLadyOrbs = Math.floor(this.oldLadyOrbs);

  }

  public setFloor(event) {
    this.floorsCompleted = event.target.value;
    this.save();
    this.calculateAspenData();
  }

  public save() {
    localStorage.setItem(this.saveName, JSON.stringify(this.floorsCompleted));
  }

  public load() {
    const save = JSON.parse(localStorage.getItem(this.saveName));
    if (save) {
      this.floorsCompleted = Number(save);
      this.calculateAspenData();
    }
  }

}
