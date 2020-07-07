import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Menu} from '../models/menu.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {

  menuItemOne: string;
  menuItem: Menu[];

  constructor() {
    this.menuItem = [new Menu('insert_emoticon', 'Profile'),
      new Menu('exit_to_app', 'Log Out')];
    this.menuItemOne = 'menu';
  }

  ngOnInit(): void {
  }

}
