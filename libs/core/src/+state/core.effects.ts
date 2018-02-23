import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { CoreState } from "./core.interfaces";
import { tap, map } from "rxjs/operators";
import { CoreActionTypes, CoreAction } from "./core.actions";

@Injectable()
export class CoreEffects {
  @Effect({ dispatch: false })
  switchLamp$ = this.actions
    .ofType(CoreActionTypes.SWITCH_LAMP)
    .pipe(tap(() => console.log("Effect SwitchLamp")));

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<CoreState>
  ) {}
}
