import { Component, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MonthlyService } from '../../services/monthly.service';

@Component({
  selector: 'app-monthly-row',
  templateUrl: './monthly-row.component.html',
  styleUrls: ['./monthly-row.component.scss']
})
export class MonthlyRowComponent implements AfterViewInit {

  public scrollData;
  public handle;

  public selectInGroup;

  public type = 'checkbox';

  @ViewChild('checkbox', {static: false})
  public checkboxElement: any;

  @Input()
  set data(data) {
    this.scrollData = data;
    this.handle = data.handle;
  }

  @Input()
  set registerFunction(registerToGroup) {
    if (registerToGroup) {
      this.type = 'radio';
      this.selectInGroup = registerToGroup(this.scrollData.handle, this.deselect);
    }
  }

  constructor(private monthlyService: MonthlyService) {
  }

  ngAfterViewInit() {
  }

  public isSelected() {
    return this.monthlyService.getIfSelected(this.handle);
  }

  public onChange = (event) => {
    setTimeout(() => {
      if (event.target.checked) {
        if (this.selectInGroup) {
          this.selectInGroup(this.handle);
        }
        this.monthlyService.changeMonthlyData(this.scrollData.handle, this.scrollData.scrolls);
      } else {
        this.monthlyService.removeMonthlyData(this.scrollData.handle);
      }
    }, 50);
  }

  public deselect = () => {
    this.checkboxElement.nativeElement.checked = false;
    this.monthlyService.removeMonthlyData(this.scrollData.handle);
  }

}
