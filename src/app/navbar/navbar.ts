import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  @Input() activeBtn!: string;
  @Output() activeBtnChange = new EventEmitter<
    'pomodoro' | 'shortBreak' | 'longBreak'
  >();

  setActive(btnName: 'pomodoro' | 'shortBreak' | 'longBreak') {
    this.activeBtnChange.emit(btnName);
  }
}
