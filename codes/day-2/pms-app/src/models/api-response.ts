import { Product } from "./product";

export interface ApiResponse {
    message: string;
    data: Product | Product[] | null;
}