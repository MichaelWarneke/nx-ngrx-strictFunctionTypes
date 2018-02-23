import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lamp',
  templateUrl: './lamp.component.html',
  styleUrls: ['./lamp.component.css']
})
export class LampComponent {
  @Input() lampOn = false;
  @Output() lampButtonPressed = new EventEmitter();
}
