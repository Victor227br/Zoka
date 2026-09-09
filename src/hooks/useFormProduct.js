import { useState, useEffect, useContext } from "react"
import { ProductsContext } from "../context/ProductsContext"
import coffeePackage from "../assets/picture/coffee_package.png";

export const useFormProduct = () => {
  const {editingProduct, products ,addProduct, editProduct, closeForm} = useContext(ProductsContext)

  const inicialValue = {
    id: new Date().getTime().toString(),
    name:"",
    price:"",
    stock:"",
    type: "Hot Drink",
    status: "active",
    description: "",
    img: "",
  }
  
  const [formData, setFormData] = useState(inicialValue);
  const [textValueButton, setTextValueButton] = useState("Save Product")

  useEffect(() => {
    if(editingProduct){
      setFormData(editingProduct)
      setTextValueButton("Edit Product")
    } 
  }, [editingProduct])

  const validForm = 
    !formData.name.trim() ||
    !formData.description.trim() ||
    !formData.img.trim() ||
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