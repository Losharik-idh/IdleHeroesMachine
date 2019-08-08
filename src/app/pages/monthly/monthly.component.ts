import { Component, OnInit } from '@angular/core';
import { Helper } from '../../utilities/helper';
import * as Constants from '../../globals/Constants';
import { MonthlyService } from '../../services/monthly.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.scss']
})
export class MonthlyComponent implements OnInit {

  public monthlyData;
  private helper = new Helper();

  constructor(private monthlyService: MonthlyService) {
    this.monthlyData = Constants.MONTHLY_SCROLLS_DATA;
  }

  ngOnInit() {
  }

}
