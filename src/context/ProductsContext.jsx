import { useProductsActions } from "../hooks/useProductActions";
import { ProductsContext } from "./productsContext";

export function ProductsProvider({ children }) {
  const {
    products,
    editingProduct,
    isFormOpen,
    addProduct,
    editProduct,
    removeProduct,
    purchaseProducts,
    openForm,
    closeForm,
  } = useProductsActions();

  return (
    <ProductsContext.Provider
      value={{
        products,
        editingProduct,
        isFormOpen,
        addProduct,
        editProduct,
        removeProduct,
        purchaseProducts,
        openForm,
        closeForm,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
