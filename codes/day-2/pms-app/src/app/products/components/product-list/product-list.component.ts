import { Component } from "@angular/core";
import { products } from "src/data/products";
import { Product } from "src/models/product";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    productRecords: Product[] = products
    data = 'data'
    filterText = ''
    updateFilterText(newText: string) {
        this.filterText = newText
    }
}