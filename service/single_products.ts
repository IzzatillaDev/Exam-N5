import request from "../api/interseptors";
import { Request } from "../interface/single_products";

const single_products: Request = {
    get_single_products: (id: string) => request.get(`/product/${id}`),
};

export default single_products;
