import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
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
    EffectsModule.forRoot([CoreEffects])
  ],
  providers: [
    CoreEffects,
    { provide: RouterStateSerializer, useClass: CustomRouterStateSerializer }
  ]
})
export class CoreModule {}
