import { createContext } from "react";
import { useProductsActions } from "../hooks/useProductActions";


export const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {

 const {
  products,
  editingProduct,
  isFormOpen,
  addProduct,
  editProduct,
  removeProduct, 
  openForm, 
  closeForm,
} = useProductsActions()

    return (
        <ProductsContext.Provider value={{products, editingProduct, isFormOpen, addProduct, editProduct, removeProduct, openForm, closeForm,}}>
            {children}
        </ProductsContext.Provider>
    );
}