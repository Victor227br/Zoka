import { useContext, useState } from "react"
import { ProductsContext } from "../context/productsContext"

export const useFormProduct = () => {
  const {editingProduct, addProduct, editProduct, closeForm} = useContext(ProductsContext)

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

  const validForm = 
    !formData.name.trim() ||
    !formData.description.trim() ||
    (formData.type !== "Package" && !formData.img.trim()) ||
    !formData.price ||
    !formData.stock

  const handleSubmit = (event) => {
    event.preventDefault() 
    if (validForm){
      window.alert("Fill in all the input fields")
    } else{
      if(editingProduct){
        editProduct(formData)
      } else{
        addProduct(formData)
      }
    }
    closeForm()
  }

  return {
    formData, 
    textValueButton,
    validForm,
    setFormData,
    handleSubmit
  }
}
