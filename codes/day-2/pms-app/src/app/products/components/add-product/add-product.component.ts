import { Component, Inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PRODUCT_SERVICE_TOKEN } from 'src/constants/app-constants';
import { Product } from 'src/models/product';
import { IAppService } from 'src/models/product-service-contract';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnDestroy {

  private subscription?: Subscription;
  form: FormGroup = new FormGroup({
    productId: new FormControl(0),
    productName: new FormControl(''),
    productCode: new FormControl(''),
    description: new FormControl(''),
    releaseDate: new FormControl(''),
    starRating: new FormControl(0),
    imageUrl: new FormControl(''),
    price: new FormControl(0)
  })
  constructor(
    @Inject(PRODUCT_SERVICE_TOKEN) private ps: IAppService,
    private router: Router
  ) {

  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  submitProduct() {
    // console.log(this.form.controls['id'].value)
    // console.log(this.form.get('name')?.value)
    console.log(this.form.value)
    this.subscription = this.ps
      .addProduct(<Product>this.form.value)
      .subscribe({
        next: (resp) => {
          if (resp.data !== null) {
            alert(resp.message)
            this.router.navigate(['/products'])
          } else {
            alert(resp.message)
          }
        },
        error: (err: Error) => { alert(err.message) }
      })
  }
}
