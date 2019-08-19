import { AfterViewInit, Component } from '@angular/core';
import { MonthlyService } from '../../services/monthly.service';

@Component({
  selector: 'app-aspen-dungeon',
  templateUrl: './aspen-dungeon.component.html',
  styleUrls: ['./aspen-dungeon.component.scss']
})
export class AspenDungeonComponent implements AfterViewInit {

  constructor(public monthly: MonthlyService) { }

  ngAfterViewInit() {}

  public setFloor(event) {
    this.monthly.floorsCompleted = event.target.value;
    this.monthly.setAspenDungeonFloor(event.target.value);
  }

}
