import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "lazy-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.css"]
})
export class PageComponent {
  @Input() name = "";
  @Output() changeName: EventEmitter<string> = new EventEmitter<string>();

  keyPressed(text: string) {
    this.changeName.emit(text);
  }
}
