import { useContext, useState } from "react"
import { ProductsContext } from "../context/productsContext"
import { hasDuplicateName } from "../utils/validation"

export const useFormProduct = () => {
  const {products, editingProduct, addProduct, editProduct, closeForm} = useContext(ProductsContext)

  const [formData, setFormData] = useState(() => editingProduct || {
    id: new Date().getTime().toString(),
    name: "",
    price: "",
    stock: "",
    type: "Hot Drink",
    status: "active",
    description: "",
    img: "",
  });

  const textValueButton = editingProduct ? "Edit Product" : "Save Product"
  const nameError = hasDuplicateName(products, formData.name, editingProduct?.id)
    ? "A product with this name already exists. Choose another name."
    : ""

  const validForm = 
    !formData.name.trim() ||
    !formData.description.trim() ||
    (formData.type !== "Package" && !formData.img.trim()) ||
    !Number.isFinite(Number(formData.price)) || Number(formData.price) <= 0 ||
    formData.stock === "" || !Number.isInteger(Number(formData.stock)) || Number(formData.stock) < 0

  const handleSubmit = (event) => {
    event.preventDefault() 
    if (nameError) {
      return
    }
    if (validForm){
      window.alert("Fill in all the input fields")
      return
    } else{
      if(editingProduct){
        editProduct({...formData, price: Number(formData.price), stock: Number(formData.stock), status: Number(formData.stock) === 0 ? "inactive" : formData.status.toLowerCase()})
      } else{
        addProduct({...formData, price: Number(formData.price), stock: Number(formData.stock), status: Number(formData.stock) === 0 ? "inactive" : formData.status.toLowerCase()})
      }
    }
    closeForm()
  }

  return {
    formData, 
    textValueButton,
    validForm,
    nameError,
    setFormData,
    handleSubmit
  }
}
