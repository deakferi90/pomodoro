import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dialog-content',
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: 'dialog-content.html',
})
export class DialogContentComponent {}
