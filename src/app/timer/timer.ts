import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  styleUrls: ['./timer.scss'],
})
export class Timer implements OnChanges {
  @Input() activeBtn!: string;

  public play = 'PLAY';
  public pause = 'PAUSE';
  public timeDisplay: string = '25:00';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeBtn']) {
      this.updateTimeDisplay(this.activeBtn);
    }
  }

  updateTimeDisplay(mode: string) {
    switch (mode) {
      case 'pomodoro':
        this.timeDisplay = '25:00';
        break;
      case 'shortBreak':
        this.timeDisplay = '5:00';
        break;
      case 'longBreak':
        this.timeDisplay = '15:00';
        break;
      default:
        this.timeDisplay = '25:00';
    }
  }

  countdown() {
    console.log('this is the coutdown');
  }
}
