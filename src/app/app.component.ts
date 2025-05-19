import { Component } from '@angular/core';

import { HeaderComponent } from './shared/header/header.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { ExtensionsListComponent } from './components/extensions-list/extensions-list.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TabsComponent, ExtensionsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
