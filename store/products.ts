import { create } from "zustand"
import { ProductsStore } from "../interface/products"
import products from "../service/product"
// import Notification from "../utils/notification"


const useProductsStore = create<ProductsStore>((set: any) => ({
    datas: [],
    getData: async () => {
        try {
            const response = await products.get_products()
            console.log(response)
            if(response.status === 200){
                set({datas:response?.data.payload})
                // const ids = response.data.payload.map(product => product._id)
                // console.log(ids)
                // localStorage.setItem("product_id", ids)
                // localStorage.setItem("product_id", response?.data?.data?.products.id)
            }
            return response
        } catch (error) {
            console.log(error)
        }
    }
}))

export default useProductsStore