import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projects_store';
  isDarkMode: boolean = false;

  onSwitchMode(isDark: boolean): void {
    this.isDarkMode = isDark;
    console.log('isDarkMode : ', this.isDarkMode)
  }
}
