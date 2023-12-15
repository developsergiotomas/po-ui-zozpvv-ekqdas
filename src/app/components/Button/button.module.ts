import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from '../Button/button.component';
import { ButtonKindDirective } from '../Button/buttonKind.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ButtonComponent, ButtonKindDirective],
  exports: [ButtonComponent],
})
export class ButtonModule {}
