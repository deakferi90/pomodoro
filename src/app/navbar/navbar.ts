import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  activeBtn: string = 'pomodoro';

  setActive(btnName: string) {
    this.activeBtn = btnName;
  }
}
