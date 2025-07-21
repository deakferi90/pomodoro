import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { TimerComponent } from './timer/timer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Navbar, TimerComponent, RouterModule],
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  activeBtn = signal<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');

  onModeChange(newMode: 'pomodoro' | 'shortBreak' | 'longBreak') {
    this.activeBtn.set(newMode);
  }
}
