import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { selectName, CoreActionTypes } from "@ngrx-basic/core";

@Component({
  selector: "lazy-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"]
})
export class ContainerComponent {
  name: Observable<string>;

  constructor(private store: Store<any>) {
    this.name = this.store.select(selectName);
  }

  ChangeName(text: string) {
    console.log("Change Name :", text);
    this.store.dispatch({
      type: CoreActionTypes.CHANGE_NAME,
      payload: text
    });
  }
}
