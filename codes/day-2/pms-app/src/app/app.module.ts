import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/components/product-list/product-list.component";
import { UppercaseConverterPipe } from "./products/pipes/uppercase-converter.pipe";



@NgModule({
    declarations: [AppComponent, ProductListComponent, UppercaseConverterPipe],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}