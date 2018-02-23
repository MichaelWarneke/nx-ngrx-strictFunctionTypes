import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LampComponent } from './lamp/lamp.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LampComponent],
  exports: [LampComponent]
})
export class LampModule {}
