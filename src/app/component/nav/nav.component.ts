import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'store-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isDark!: boolean;

  @Output() changeModeEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  switchMode() {
    this.isDark = !this.isDark;
    this.changeModeEvent.emit(!this.isDark);
  }
}
