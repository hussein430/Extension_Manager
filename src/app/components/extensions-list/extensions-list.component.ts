import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

@Component({
  selector: 'app-extensions-list',
  imports: [CommonModule],
  templateUrl: './extensions-list.component.html',
  styleUrl: './extensions-list.component.css'
})
export class ExtensionsListComponent {
 extensions: Extension[] = [
    {
      logo: 'images/logo-devlens.svg',
      name: 'DevLens',
      description: 'Quickly inspect page layouts and visualize element boundaries.',
      isActive: true,
    },
    {
      logo: 'images/logo-style-spy.svg',
      name: 'StyleSpy',
      description: 'Instantly analyze and copy CSS from any webpage element.',
      isActive: true,
    },
    {
      logo: 'images/logo-speed-boost.svg',
      name: 'SpeedBoost',
      description: 'Optimizes browser resource usage to accelerate page loading.',
      isActive: false,
    },
    {
      logo: 'images/logo-json-wizard.svg',
      name: 'JSONWizard',
      description: 'Formats, validates, and prettifies JSON responses in-browser.',
      isActive: true,
    },
    // Add more as needed...
  ];

  toggleStatus(extension: Extension) {
    extension.isActive = !extension.isActive;
  }

  removeExtension(index: number) {
    this.extensions.splice(index, 1);
  }
}
