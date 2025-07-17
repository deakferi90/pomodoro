import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.scss',
})
export class Timer {
  protected readonly title = signal('pomodoro-app');
  public play = 'PLAY';
  public pause = 'PAUSE';
}
