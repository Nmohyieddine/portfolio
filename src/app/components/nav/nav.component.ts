import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-nav',
  imports: [MatIcon, MatBadgeModule, MatDivider, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  selectedItem = '';

  items = [
    { name: 'home', label: 'Home', icon: 'home', badgeNumber: 1 },
    { name: 'jobs', label: 'Jobs', icon: 'group', badgeNumber: 5 },
    { name: 'work', label: 'Work', icon: 'work', badgeNumber: 1 },
    { name: 'messaging', label: 'Messaging', icon: 'chat', badgeNumber: 2 },
    { name: 'notifications', label: 'Notifications', icon: 'notifications', badgeNumber: null },
  ];

  onIconClicked(name: string): void {
    this.selectedItem = name;
    console.log(this.selectedItem);
  }

  isIconClassActive(name: string): boolean {
    const result = this.selectedItem === name;
    console.log(result);

    return result;
  }
}
