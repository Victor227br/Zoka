import { useState, useEffect, useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
import coffeePackage from "../assets/picture/coffee_package.png";

export const useFormProduct = () => {

  const {editingProduct, addProduct, editProduct, closeForm} = useContext(ProductsContext)

  const inicialValue = {
    id: new Date().getTime().toString(),
    name:"",
    price:"",
    stock:"",
    type: "Hot Drink",
    status: "Active ",
    description: "",
    img: "",
  }

  const [formData, setFormData] = useState(inicialValue);
  const [textValueButton, setTextValueButton] = useState("Save Product")

  useEffect(() => {
  if (editingProduct) {
    setFormData(editingProduct);
    setTextValueButton("Edit Product")
  }
}, []);

  const validForm = 
    !formData.name.trim() ||
    !formData.description.trim() || 
    !formData.price.trim() ||
    !formData.stock.trim()

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