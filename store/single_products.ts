import { create } from "zustand";
import { SingleProductsStore } from "../interface/single_products";
import single_products from "../service/single_products";

const useSingleProductsStore = create<SingleProductsStore>((set) => ({
    datas: [], // Initial state for storing product data
    getData: async (id: string) => { // Function to fetch product data by ID
        try {
            const response = await single_products.get_single_products(id);
            if (response.status === 200) {
                // Assuming the product data is in `response.data.payload`
                set({ datas: response.data.payload });
            }
        } catch (error) {
            console.error("Failed to fetch product data:", error);
        }
    }
}));

export default useSingleProductsStore;
