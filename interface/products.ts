

export interface Get_Products{
    page: number ,
    limit:number,
    name?: string | number
}



export interface ProductsStore {
    datas: any[],
    getData: () => Promise<any>
}

export interface Request {
    get_products: () => Promise<any>
}