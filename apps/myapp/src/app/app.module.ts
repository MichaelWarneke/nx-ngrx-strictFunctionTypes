import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { NxModule } from "@nrwl/nx";
import { RouterModule } from "@angular/router";
import { CoreModule } from "@ngrx-basic/core";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [{ path: "mylazy", loadChildren: "@ngrx-basic/mylazy#MylazyModule" }],
      {
        initialNavigation: "enabled"
      }
    )
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
