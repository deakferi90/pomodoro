import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
// import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.scss',
})
export class Timer {
  protected readonly title = signal('pomodoro-app');
}
