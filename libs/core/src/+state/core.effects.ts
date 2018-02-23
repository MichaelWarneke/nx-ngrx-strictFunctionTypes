import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { CoreState } from "./core.interfaces";
import { tap, map } from "rxjs/operators";
import { CoreActionTypes, CoreAction } from "./core.actions";

@Injectable()
export class CoreEffects {
  // old usage of ofType
  @Effect({ dispatch: false })
  switchLamp$ = this.actions
    .ofType(CoreActionTypes.SWITCH_LAMP)
    .pipe(tap(() => console.log("Effect SwitchLamp")));

  // new usage of ofType
  @Effect({ dispatch: false })
  changeName$ = this.actions.pipe(
    ofType(CoreActionTypes.CHANGE_NAME),
    tap(() => console.log("Effect ChangeName"))
  );

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<CoreState>
  ) {}
}
