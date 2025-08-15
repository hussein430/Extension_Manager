import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Extension } from '../../extension.model';
import { extensionsList } from '../../extensions';

@Component({
  selector: 'app-extensions-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './extensions-list.component.html',
  styleUrl: './extensions-list.component.css',
})
export class ExtensionsListComponent {
  @Input() filterBy!: string;
  filtered: Extension[] = [];
  extensions: Extension[] = extensionsList;

  ngOnChanges() {
    this.filterExtensions();
  }

  filterExtensions() {
    if (this.filterBy === 'Active') {
      this.filtered = this.extensions.filter((ext) => ext.isActive === true);
    } else if (this.filterBy === 'Inactive') {
      this.filtered = this.extensions.filter((ext) => ext.isActive === false);
    } else {
      this.filtered = this.extensions;
    }
  }

  toggleStatus(extension: Extension, checked: boolean) {
    extension.isActive = checked;
    this.filterExtensions(); 
  }

  removeExtension(ext: Extension) {
    const idx = this.extensions.indexOf(ext);
    if (idx > -1) {
      this.extensions.splice(idx, 1);
    }
    this.filterExtensions();
  }
}
