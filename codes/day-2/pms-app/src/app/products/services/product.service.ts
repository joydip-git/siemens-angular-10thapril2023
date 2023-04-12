import { Observable, of } from "rxjs";
import { products } from "src/data/products";
import { ApiResponse } from "src/models/api-response";
import { IAppService } from "src/models/product-service-contract";

export class ProductService implements IAppService {
    public getProducts(): Observable<ApiResponse> {
        const response: ApiResponse = {
            message: 'records found',
            data: [...products]
        }
        const responseObs: Observable<ApiResponse> = of(response)
        return responseObs
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