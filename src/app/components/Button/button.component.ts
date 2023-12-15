import { Component, Input, Output, VERSION } from '@angular/core';

type ColorType = 'default' | 'primary' | 'secondary' | 'tertiary';

@Component({
  selector: 'poi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input('color') color: ColorType;
}
