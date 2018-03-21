import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Renderer } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  tab = {'tab': true};
  tabContent = 'tab-content';
  tabs = [new Tab('active', 'Register'), new Tab('', 'View')];
  tabGroup = 'tab-group';

  constructor(private render: Renderer) {

  }

  OnOptionClick(tabName: string)
  // tslint:disable-next-line:one-line
  {
    this.tabs.forEach( tab => {
      if (tabName === tab.name) {
        tab.className = 'active';
        } else {
        tab.className = '';
      }
    });
  }

  ResolveComponent(str: string) {
    return str.toLowerCase();
  }
}

export class Tab {
    className: string;
    name: string;
    constructor(className: string, name: string) {
      this.className = className;
      this.name = name;
    }
}

