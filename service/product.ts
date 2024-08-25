import request from "../api/interseptors";
import { Request } from "../interface/products";


const products:Request ={
    get_products: () => request.get("/products?limit=10&skip=1"),
}

export default products;