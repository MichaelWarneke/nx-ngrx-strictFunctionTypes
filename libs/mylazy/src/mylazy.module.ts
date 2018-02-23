import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PageComponent } from "./page/page.component";
import { ContainerComponent } from "./container/container.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", pathMatch: "full", component: ContainerComponent }
    ])
  ],
  declarations: [PageComponent, ContainerComponent]
})
export class MylazyModule {}
