import { Component } from '@angular/core';

@Component({
  selector: 'pm-footer',
  standalone: true,
  template: `<footer><ng-content></ng-content></footer>`,
  styleUrls: ['./pm-footer.component.scss']
})
export class PmFooterComponent {}
