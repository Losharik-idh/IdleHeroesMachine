import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ld-shards',
  templateUrl: './ld-shards.component.html',
  styleUrls: ['./ld-shards.component.scss']
})
export class LdShardsComponent implements AfterViewInit {

  public ldData;

  private saveName = 'IHM_LD_SHARDS';

  public LIGHT = 'light';
  public DARK = 'dark';

  constructor() {
    this.ldData = {
      [this.LIGHT]: {
        S4: 0,
        H4: 0,
        H5: 0,
        TOTAL: 0,
        NEEDED3STAR: 0,
      },
      [this.DARK]: {
        S4: 0,
        H4: 0,
        H5: 0,
        TOTAL: 0,
        NEEDED3STAR: 0,
      }
    };
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.load();
    }, 1);
  }

  public onChange4StarShards(event, type) {
    this.ldData[type].S4 = Number(event.target.value);
    this.calculate(type);
  }
  public onChange4StarHeroes(event, type) {
    this.ldData[type].H4 = Number(event.target.value);
    this.calculate(type);
  }
  public onChange5StarHeroes(event, type) {
    this.ldData[type].H5 = Number(event.target.value);
    this.calculate(type);
  }

  private calculate(typre) {
    Object.keys(this.ldData).forEach((type) => {
      const summonable4StarHeroes = Math.floor(this.ldData[type].S4 / 30);
      const total4starHeroes = summonable4StarHeroes + this.ldData[type].H4;
      const fusable5Star = Math.floor(total4starHeroes / 8);
      this.ldData[type].NEEDED3STAR = fusable5Star * 4;
      this.ldData[type].TOTAL = fusable5Star + this.ldData[type].H5;
    });

    this.save();
  }

  public getPercentage(type) {
    return this.round((this.ldData[type].TOTAL / 31) * 100);
  }

  public round(nr) {
    return Math.floor(nr * 100) / 100;
  }

  public save() {
    localStorage.setItem(this.saveName, JSON.stringify(this.ldData));
  }

  public load() {
    const save = JSON.parse(localStorage.getItem(this.saveName));
    if (save) {
      this.ldData = save;
      this.calculate(1);
    }
  }

}
