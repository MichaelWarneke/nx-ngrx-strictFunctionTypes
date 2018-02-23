import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreRouterConnectingModule } from "@ngrx/router-store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, metaReducers } from "./+state/core.reducer";
import { coreInitialState } from "./+state/core.init";
import { CoreEffects } from "./+state/core.effects";
import { RouterStateSerializer } from "@ngrx/router-store";
import { CustomRouterStateSerializer } from "./router-utils";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      initialState: { core: coreInitialState },
      metaReducers: metaReducers
    }),
    StoreDevtoolsModule.instrument({
      name: "NgRx Book Store DevTools",
      logOnly: false
    }),
    StoreRouterConnectingModule.forRoot({
      /*
        They stateKey defines the name of the state used by the router-store reducer.
        This matches the key defined in the map of reducers
      */
      stateKey: "router"
    }),
    EffectsModule.forRoot([CoreEffects])
  ],
  providers: [
    CoreEffects,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ]
})
export class CoreModule {}
