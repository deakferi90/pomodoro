import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
  OnDestroy,
  NgZone,
} from '@angular/core';

type Mode = 'pomodoro' | 'shortBreak' | 'longBreak';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.html',
  styleUrls: ['./timer.scss'],
})
export class TimerComponent implements OnChanges, OnDestroy {
  @Input() activeBtn!: Mode;
  @Output() modeChange = new EventEmitter<
    'pomodoro' | 'shortBreak' | 'longBreak'
  >();

  timeDisplay: string = '25:00';
  progressPercent: number = 100;
  private hasStartedOnce: boolean = false;
  private totalSeconds: number = 0;
  private secondsLeft: number = 0;
  private timerInterval: any = null;
  private isAutoSwitch: boolean = false;
  public isRunning: boolean = false;

  private pomodoroCount: number = 0;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeBtn']) {
      this.setMode(this.activeBtn);
      this.resetTimer();
      if (this.hasStartedOnce && this.isAutoSwitch) {
        this.startTimer();
        this.isAutoSwitch = false;
      }
    }
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  setMode(mode: Mode) {
    this.activeBtn = mode;

    switch (mode) {
      case 'pomodoro':
        this.totalSeconds = 25 * 60;
        break;
      case 'shortBreak':
        this.totalSeconds = 5 * 60;
        break;
      case 'longBreak':
        this.totalSeconds = 15 * 60;
        break;
      default:
        this.totalSeconds = 25 * 60;
    }
    this.secondsLeft = this.totalSeconds;
    this.updateDisplay();
    this.updateProgress();
  }

  updateDisplay() {
    this.timeDisplay = this.formatTime(this.secondsLeft);
  }

  updateProgress() {
    this.progressPercent = (this.secondsLeft / this.totalSeconds) * 100;
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${this.pad(mins)}:${this.pad(secs)}`;
  }

  pad(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  startTimer() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.hasStartedOnce = true;
    this.ngZone.runOutsideAngular(() => {
      this.timerInterval = setInterval(() => {
        if (this.secondsLeft > 0) {
          this.secondsLeft--;
          this.ngZone.run(() => {
            this.updateDisplay();
            this.updateProgress();
            this.cdr.detectChanges();
          });
        } else {
          this.ngZone.run(() => {
            this.clearTimer();
            this.handleTimerEnd();
          });
        }
      }, 1000);
    });
  }

  pauseTimer() {
    this.clearTimer();
  }

  resetTimer() {
    this.clearTimer();
    this.secondsLeft = this.totalSeconds;
    this.isRunning = false;
    this.updateDisplay();
    this.updateProgress();
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
    this.isRunning = false;
  }

  handleTimerEnd() {
    this.isAutoSwitch = true;
    if (this.activeBtn === 'pomodoro') {
      this.pomodoroCount++;
      if (this.pomodoroCount % 4 === 0) {
        this.switchMode('longBreak');
        this.startTimer();
      } else {
        this.switchMode('shortBreak');
        this.startTimer();
      }
    } else {
      this.switchMode('pomodoro');
      this.startTimer();
    }
  }

  switchMode(newMode: Mode) {
    this.modeChange.emit(newMode);
  }

  toggleTimer() {
    if (this.isRunning) {
      this.pauseTimer();
    } else {
      this.startTimer();
    }
  }
}
