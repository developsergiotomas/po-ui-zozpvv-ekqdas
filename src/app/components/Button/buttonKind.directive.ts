import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

type ColorType = 'default' | 'primary' | 'secondary' | 'tertiary';

@Directive({
  selector: '[color]',
})
export class ButtonKindDirective {
  @Input()
  color: ColorType = 'primary';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.addClass(this.el, 'color-' + this.color);
  }
}
