import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { selectName, CoreActionTypes } from "@ngrx-basic/core";
import { Post } from "../+state/mylazy.interfaces";
import { selectAll } from "../+state/mylazy.reducer";
import { MylazyActionTypes } from "../+state/mylazy.actions";

@Component({
  selector: "lazy-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.css"]
})
export class ContainerComponent {
  name: Observable<string>;
  list: Observable<Post[]>;

  constructor(private store: Store<any>) {
    this.store.dispatch({ type: MylazyActionTypes.LOAD_DATA });
    this.name = this.store.select(selectName);
    this.list = this.store.select(selectAll);
  }

  ChangeName(text: string) {
    this.store.dispatch({
      type: CoreActionTypes.CHANGE_NAME,
      payload: text
    });
  }
}
