import { Size } from "./size";

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    sku: number;
    size: string;
    categoryId: number;
}
