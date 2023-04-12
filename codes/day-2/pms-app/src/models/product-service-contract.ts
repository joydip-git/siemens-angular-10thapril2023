import { Observable } from "rxjs";
import { ApiResponse } from "./api-response";

export interface IAppService {
    getProducts(): Observable<ApiResponse>;
}