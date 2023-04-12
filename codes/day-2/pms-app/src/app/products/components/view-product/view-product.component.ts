import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE_TOKEN } from 'src/constants/app-constants';
import { ApiResponse } from 'src/models/api-response';
import { Product } from 'src/models/product';
import { IAppService } from 'src/models/product-service-contract';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit, OnDestroy {
  product?: Product;
  errorMessage = ''
  loadingComplete = false

  private productSubscription?: Subscription;
  constructor(
    private route: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private ps: IAppService
  ) {

  }
  ngOnDestroy(): void {
    this.productSubscription?.unsubscribe()
  }
  ngOnInit(): void {
    //this.route.params.subscribe()
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot
    const allParams: Params = snapshot.params
    const id = Number(allParams['id'])
    this.productSubscription =
      this.ps
        .getProduct(id)
        .subscribe({
          next: (resp: ApiResponse) => {
            if (resp.data !== null) {
              this.product = <Product>resp.data
              this.errorMessage = ''
              this.loadingComplete = true
            } else {
              this.product = undefined
              this.errorMessage = resp.message
              this.loadingComplete = true
            }
          },
          error: (err: Error) => {
            this.product = undefined
            this.errorMessage = err.message
            this.loadingComplete = true
          }
        })
  }
}
