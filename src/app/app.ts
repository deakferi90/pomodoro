import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { TimerComponent } from './timer/timer';
import { RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogContentComponent } from './dialog-content/dialog-content';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [
    Navbar,
    TimerComponent,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
  ],
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}
  activeBtn = signal<'pomodoro' | 'shortBreak' | 'longBreak'>('pomodoro');

  onModeChange(newMode: 'pomodoro' | 'shortBreak' | 'longBreak') {
    this.activeBtn.set(newMode);
  }

  openDialog() {
    this.dialog.open(DialogContentComponent);
  }
}
