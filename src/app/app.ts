import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Timer } from './timer/timer';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Navbar, Timer, RouterModule],
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  activeBtn = signal('pomodoro');

  setActiveBtn(newBtn: string) {
    this.activeBtn.set(newBtn);
  }
}
