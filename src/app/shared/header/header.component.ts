import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isDark = false;

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.setDark();
      this.isDark = true;
    } else {
      this.setLight();
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.setDark();
    } else {
      this.setLight();
    }
  }

  setDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  setLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}
