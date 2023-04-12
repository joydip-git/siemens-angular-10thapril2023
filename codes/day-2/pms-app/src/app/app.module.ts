import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/components/product-list/product-list.component";
import { UppercaseConverterPipe } from "./products/pipes/uppercase-converter.pipe";
import { ProductFilterPipe } from "./products/pipes/product-filter.pipe";
import { FilterComponent } from './products/components/filter/filter.component';
import { ProductService } from "./products/services/product.service";
import { PRODUCT_SERVICE_TOKEN, SERVICE_TYPE } from "src/constants/app-constants";



@NgModule({
    declarations: [AppComponent, ProductListComponent, UppercaseConverterPipe, ProductFilterPipe, FilterComponent],
    imports: [BrowserModule],
    providers: [
        //ProductService
        {
            provide: PRODUCT_SERVICE_TOKEN,
            useClass: SERVICE_TYPE
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}