import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AnotherComponent } from "./another/another.components";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  //component, directive, pipe
  declarations: [
    AppComponent, AnotherComponent
  ],
  //modules
  imports: [BrowserModule],
  //services
  providers: [],
  //bootstrap components
  bootstrap: [AppComponent]
})
export class AppModule {

}