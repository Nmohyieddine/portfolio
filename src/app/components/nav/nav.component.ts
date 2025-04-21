import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

interface Item {
  name: string;
  label: string;
  icon: string;
  badgeNumber: number | null;
  path: string;
}

@Component({
  selector: 'app-nav',
  imports: [MatIcon, MatBadgeModule, NgClass],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  selectedItem = '';

  items: Item[] = [
    { name: 'home', label: 'Home', icon: 'home', badgeNumber: 5, path: '/home' },
    { name: 'recruiter', label: 'Recruiter', icon: 'group', badgeNumber: null, path: '/recruiter' },
    { name: 'business', label: 'Business', icon: 'work', badgeNumber: null, path: '/business' },
    { name: 'about', label: 'About', icon: 'lightbulb', badgeNumber: null, path: '/about' },
  ];

  constructor(private router: Router) {}

  onIconClicked(item: Item): void {
    this.selectedItem = item.name;
    this.router.navigate([item.path]);
  }

  isIconClassActive(item: Item): boolean {
    const result = this.selectedItem === item.name;
    return result;
  }
}
