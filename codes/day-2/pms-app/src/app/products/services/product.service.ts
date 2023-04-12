import { Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ApiResponse } from "src/models/api-response";
import { IAppService } from "src/models/product-service-contract";
import { PRODUCT_SERVICE_URL } from "src/constants/app-constants";
import { Product } from "src/models/product";

@Injectable()
export class ProductService implements IAppService {
    constructor(private http: HttpClient) {

    }
    addProduct(p: Product): Observable<ApiResponse> {
        return this.http.post<ApiResponse>(PRODUCT_SERVICE_URL, p)
    }
    deleteProduct(id: number): Observable<ApiResponse> {
        return this.http.delete<ApiResponse>(PRODUCT_SERVICE_URL + '/' + id)
    }
    getProduct(id: number): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(PRODUCT_SERVICE_URL + '/' + id)
    }
    public getProducts(): Observable<ApiResponse> {
        // const response: ApiResponse = {
        //     message: 'records found',
        //     data: [...products]
        // }
        // const responseObs: Observable<ApiResponse> = of(response)

        // const responseObs: Observable<ApiResponse> = this.http.get<ApiResponse>(PRODUCT_SERVICE_URL)

        const obs: Observable<any> = this.http.get(PRODUCT_SERVICE_URL)
        const responseObs: Observable<ApiResponse> =
            obs
                .pipe(
                    map(
                        (resp: any) => {
                            const apiResp: ApiResponse = {
                                message: resp.message,
                                data: resp.data
                            }
                            return apiResp
                        }
                    )
                )
        return responseObs
    }
    updateProduct(p: Product, id: number): Observable<ApiResponse> {
        return this.http.put<ApiResponse>(PRODUCT_SERVICE_URL + '/' + id, p)
    }
}
/**
 *   //... => spread operator
        const copy = [...products]
        const obj = {
            name: 'anil',
            salary: 1000
        }
        const copyObj = { ...obj }
 */