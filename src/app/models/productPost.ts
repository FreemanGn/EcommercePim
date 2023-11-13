import { Size } from "./size";

export interface ProductPost {
    name: string;
    description: string;
    price: number;
    image: string;
    sku: number;
    size: Size;
    categoryId: number;
}
