import { Observable } from "rxjs";
import { ApiResponse } from "./api-response";
import { Product } from "./product";

export interface IAppService {
    getProducts(): Observable<ApiResponse>;
    getProduct(id: number): Observable<ApiResponse>;
    deleteProduct(id: number): Observable<ApiResponse>;
    addProduct(p: Product): Observable<ApiResponse>;
    updateProduct(p: Product, id: number): Observable<ApiResponse>;
}