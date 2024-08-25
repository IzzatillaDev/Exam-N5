export interface Product {
    id: string;
    title: string;
    price: number;
    urls: string[];
    // Add any other fields your product might have
}

export interface SingleProductsStore {
    datas: Product[]; // Array of products (could be adjusted if your structure differs)
    getData: (id: string) => Promise<void>;
}

export interface Request {
    get_single_products: (id: string) => Promise<any>; // Adjust `any` based on your API response structure
}
