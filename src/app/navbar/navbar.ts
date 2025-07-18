import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  @Input() activeBtn!: string;
  @Output() activeBtnChange = new EventEmitter<string>();

  setActive(btnName: string) {
    this.activeBtnChange.emit(btnName);
  }
}
