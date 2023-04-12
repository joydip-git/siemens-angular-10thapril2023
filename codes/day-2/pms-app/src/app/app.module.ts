import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/components/product-list/product-list.component";
import { UppercaseConverterPipe } from "./products/pipes/uppercase-converter.pipe";
import { ProductFilterPipe } from "./products/pipes/product-filter.pipe";
import { FilterComponent } from './products/components/filter/filter.component';
import { ProductService } from "./products/services/product.service";



@NgModule({
    declarations: [AppComponent, ProductListComponent, UppercaseConverterPipe, ProductFilterPipe, FilterComponent],
    imports: [BrowserModule],
    providers: [ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {

}