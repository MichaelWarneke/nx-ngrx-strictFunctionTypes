import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { PageComponent } from "./page/page.component";
import { ContainerComponent } from "./container/container.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { mylazyReducer } from "./+state/mylazy.reducer";
import { mylazyInitialState } from "./+state/mylazy.init";
import { MylazyEffects } from "./+state/mylazy.effects";
import { MylistComponent } from "./mylist/mylist.component";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", component: ContainerComponent }
    ]),
    StoreModule.forFeature("posts", mylazyReducer),
    EffectsModule.forFeature([MylazyEffects])
  ],
  declarations: [PageComponent, ContainerComponent, MylistComponent],
  providers: [MylazyEffects]
})
export class MylazyModule {}
