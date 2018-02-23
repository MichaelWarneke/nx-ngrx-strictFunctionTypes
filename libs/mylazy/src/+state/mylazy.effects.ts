import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { DataPersistence } from "@nrwl/nx";
import { MylazyState, Post } from "./mylazy.interfaces";
import { LoadData, DataLoaded, MylazyActionTypes } from "./mylazy.actions";
import { HttpClient } from "@angular/common/http";
import { switchMap, tap, map } from "rxjs/operators";

@Injectable()
export class MylazyEffects {
  @Effect()
  loadData = this.dataPersistence.fetch(MylazyActionTypes.LOAD_DATA, {
    run: (action: LoadData, state: MylazyState) => {
      return this.http
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
        .pipe(
          map(data => {
            console.log("Effect Running :", data);
            return {
              type: MylazyActionTypes.DATA_LOADED,
              payload: data
            };
          })
        );
    },

    onError: (action: LoadData, error) => {
      console.error("Error", error);
    }
  });

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<MylazyState>,
    private http: HttpClient
  ) {}
}
