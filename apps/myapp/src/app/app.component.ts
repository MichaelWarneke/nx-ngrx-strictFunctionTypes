import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { selectLampOn, CoreActionTypes } from '@ngrx-basic/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lampOn$: Observable<boolean>;

  constructor(private store: Store<any>) {
    this.lampOn$ = this.store.select(selectLampOn);
  }

  SwitchLamp() {
    console.log('Switch Lamp');
    this.store.dispatch({
      type: CoreActionTypes.SWITCH_LAMP,
      payload: null
    });
  }
}
