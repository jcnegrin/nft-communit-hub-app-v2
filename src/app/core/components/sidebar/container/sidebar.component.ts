import { Component } from '@angular/core';
import { MenuItem } from '../model/MenuItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  items: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      link: '/home',
      icon: 'pi pi-home'
    },
    {
      id: 'wallet',
      label: "My Wallet",
      link: '/my-wallet',
      icon: 'pi pi-wallet'
    }
  ];

}
