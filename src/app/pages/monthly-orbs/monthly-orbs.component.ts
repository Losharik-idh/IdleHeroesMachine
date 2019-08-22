import { Component, OnInit } from '@angular/core';
import { Helper } from '../../utilities/helper';
import * as Constants from '../../globals/Constants';
import { MonthlyService } from '../../services/monthly.service';

@Component({
  selector: 'app-monthly-orbs',
  templateUrl: './monthly-orbs.component.html',
  styleUrls: ['./monthly-orbs.component.scss']
})
export class MonthlyOrbsComponent implements OnInit {

  public monthlyData;
  public arenaTokensData;
  private helper = new Helper();

  constructor(public monthlyService: MonthlyService) {
    this.monthlyData = Constants.MONTHLY_ORBS_DATA;
    this.arenaTokensData = Constants.MONTHLY_ARENA_TOKENS_DATA;
  }

  ngOnInit() {
  }

}
