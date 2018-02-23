import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { coreReducer } from "./+state/core.reducer";
import { coreInitialState } from "./+state/core.init";
import { CoreEffects } from "./+state/core.effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot<any, any>(
      { core: coreReducer },
      { initialState: { core: coreInitialState } }
    ),
    EffectsModule.forRoot([CoreEffects])
  ],
  providers: [CoreEffects]
})
export class CoreModule {}
