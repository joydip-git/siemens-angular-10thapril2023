import { Component, OnDestroy, OnInit } from "@angular/core";
import { Product } from "src/models/product";
import { ProductService } from "../../services/product.service";
import { Observable, Subscription } from "rxjs";
import { ApiResponse } from "src/models/api-response";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
    loadingComplete = false
    errorMessage = ''
    productRecords?: Product[];

    data = 'data'
    filterText = ''
    private productSubscription?: Subscription;
    constructor(private ps: ProductService) {

    }

    updateFilterText(newText: string) {
        this.filterText = newText
    }

    ngOnDestroy(): void {
        this.productSubscription?.unsubscribe()
    }
    ngOnInit(): void {
        // setTimeout(
        //     () => {
        const obs: Observable<ApiResponse> = this.ps.getProducts()
        this.productSubscription = obs.subscribe({
            next: (resp: ApiResponse) => {
                if (resp.data !== null) {
                    this.productRecords = <Product[]>resp.data
                    this.errorMessage = ''
                    this.loadingComplete = true
                } else {
                    this.productRecords = undefined
                    this.errorMessage = resp.message
                    this.loadingComplete = true
                }
            },
            error: (err: Error) => {
                this.productRecords = undefined
                this.errorMessage = err.message
                this.loadingComplete = true
            }
        })
        //     },
        //     2000
        // )
    }
}