import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { Product } from "src/models/product";
import { ProductService } from "../../services/product.service";
import { Observable, Subscription } from "rxjs";
import { ApiResponse } from "src/models/api-response";
import { IAppService } from "src/models/product-service-contract";
import { PRODUCT_SERVICE_TOKEN } from "src/constants/app-constants";

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

    // private ps: IAppService;
    // constructor(@Inject(PRODUCT_SERVICE_TOKEN) ps: IAppService) {
    //     this.ps = ps
    // }

    constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: IAppService) {
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