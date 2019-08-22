import { Component, Input, OnInit } from '@angular/core';
import { MonthlyService } from '../../services/monthly.service';

@Component({
  selector: 'app-event-result',
  templateUrl: './event-result.component.html',
  styleUrls: ['./event-result.component.scss']
})
export class EventResultComponent implements OnInit {

  public eventData;


  public scrollsAquired = 0;

  // ------
  public round = 1;
  public daysLeft = 0;
  public scrollsNeeded = 0;
  public currentScollsPerMonth = 0;
  public currentScollsPerDay = 0;

  public neededForNextRoundCompletion = 0;
  public roundsCompletedAtCurrentRate: any = 0;
  public neededPerDayForFullCompletion: any = 0;
  public totalScrollsAtEndOfEvent = 0;
  // ------

  public canFullyComplete = false;

  public eventPassed = false;

  public isVisible = true;

  @Input()
  set event(data) {
    this.eventData = data;
    this.daysLeft = Math.floor(( Date.parse(this.eventData.date) - Date.parse(new Date().toDateString()) ) / 86400000);
    if (this.daysLeft < 0) {
      this.daysLeft = 0;
      this.eventPassed = true;
    } else {
      this.eventPassed = false;
    }
  }

  @Input()
  set totalScrolls(total) {
    this.scrollsAquired = Number(total);
    this.calculate();
  }

  @Input()
  set activeEvent(eventName) {
    this.isVisible = (eventName === this.eventData.event);
  }


  constructor(private monthlyService: MonthlyService) { }

  ngOnInit() {
  }

  public calculate = () => {
    this.canFullyComplete = false;
    this.currentScollsPerDay = this.roundDec(this.monthlyService.total / 30, 1);
    const totalScrollsAtEventDate = (this.currentScollsPerDay * this.daysLeft) + this.scrollsAquired;

    this.roundsCompletedAtCurrentRate = Math.floor(totalScrollsAtEventDate / this.eventData.neededPerRound);
    if (this.roundsCompletedAtCurrentRate >= this.eventData.maxRounds) {
      this.roundsCompletedAtCurrentRate = this.eventData.maxRounds;
    } else if (this.roundsCompletedAtCurrentRate < 0) {
      this.roundsCompletedAtCurrentRate = 0;
    }

    if (this.roundsCompletedAtCurrentRate >= this.eventData.maxRounds) {
      this.neededForNextRoundCompletion = 0;
    } else {
      const scrollMinusRounds = this.eventData.neededPerRound - (this.scrollsAquired % this.eventData.neededPerRound);
      this.neededForNextRoundCompletion = this.roundDec(scrollMinusRounds / this.daysLeft, 1);

      if (!isFinite(this.neededForNextRoundCompletion)) {
        this.neededForNextRoundCompletion = scrollMinusRounds;
      }
    }

    let stillNeededForFullCompletion = (this.eventData.neededPerRound * this.eventData.maxRounds) - this.scrollsAquired;

    if (stillNeededForFullCompletion < 0) {
      stillNeededForFullCompletion = 0;
      this.canFullyComplete = true;
    }

    this.neededPerDayForFullCompletion = this.roundDec(stillNeededForFullCompletion / this.daysLeft, 1);

    this.totalScrollsAtEndOfEvent = Math.floor((this.currentScollsPerDay * this.daysLeft) + this.scrollsAquired);

    // expected total in the end
  }

  public roundDec(amount, decimals) {
    return Math.floor(amount * 100) / 100;
  }

}
