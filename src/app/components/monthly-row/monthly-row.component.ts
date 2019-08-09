import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MonthlyService } from '../../services/monthly.service';

@Component({
  selector: 'app-monthly-row',
  templateUrl: './monthly-row.component.html',
  styleUrls: ['./monthly-row.component.scss']
})
export class MonthlyRowComponent implements AfterViewInit {

  public scrollData;

  @ViewChild('checkbox', {static: false})
  public checkboxElement: any;

  @Input()
  set data(data) {
    this.scrollData = data;
  }

  constructor(private monthlyService: MonthlyService) {
  }

  ngAfterViewInit() {
  }

  public isSelected() {
    return this.monthlyService.getIfSelected(this.scrollData.handle);
  }

  public onChange(event) {
    if (event.target.checked) {
      this.monthlyService.changeMonthlyData(this.scrollData.handle, this.scrollData.scrolls);
    } else {
      this.monthlyService.removeMonthlyData(this.scrollData.handle);
    }
  }

}
