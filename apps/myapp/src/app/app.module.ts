import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NxModule } from "@nrwl/nx";
import { RouterModule } from "@angular/router";
import { CoreModule } from "@ngrx-basic/core";
import { LampModule } from "@ngrx-basic/lamp";

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [{ path: "mylazy", loadChildren: "@ngrx-basic/mylazy#MylazyModule" }],
      {
        initialNavigation: "enabled"
      }
    ),
    CoreModule,
    LampModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
