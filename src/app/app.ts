import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Timer } from './timer/timer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Timer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('pomodoro-app');
}
