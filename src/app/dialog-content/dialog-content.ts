import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dialog-content',
  imports: [CommonModule, MatButtonModule],
  templateUrl: 'dialog-content.html',
  styleUrls: ['dialog-content.scss'],
})
export class DialogContentComponent {}
