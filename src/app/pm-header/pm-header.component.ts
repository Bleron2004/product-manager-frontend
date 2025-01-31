import { Component } from '@angular/core';

@Component({
  selector: 'pm-header',
  standalone: true,
  template: `<header><ng-content></ng-content></header>`,
  styleUrls: ['./pm-header.component.scss']
})
export class PmHeaderComponent {}
