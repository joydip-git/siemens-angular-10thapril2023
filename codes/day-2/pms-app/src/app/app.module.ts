import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./products/components/product-list/product-list.component";
import { UppercaseConverterPipe } from "./products/pipes/uppercase-converter.pipe";
import { ProductFilterPipe } from "./products/pipes/product-filter.pipe";
import { FilterComponent } from './products/components/filter/filter.component';
import { ProductService } from "./products/services/product.service";
import { PRODUCT_SERVICE_TOKEN, SERVICE_TYPE } from "src/constants/app-constants";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './common/home/home.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { RouterModule, Routes } from "@angular/router";
import { ViewProductComponent } from './products/components/view-product/view-product.component';
import { AddProductComponent } from './products/components/add-product/add-product.component';

// const homeRoute: Route = {
//     path: 'home',
//     component: HomeComponent
// }
const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'products/:id',
        component: ViewProductComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        UppercaseConverterPipe,
        ProductFilterPipe,
        FilterComponent,
        HomeComponent,
        PageNotFoundComponent,
        ViewProductComponent,
        AddProductComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
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