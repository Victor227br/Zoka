import { useState, useEffect } from "react";

const UseProductForm = (addProduct) => {

    //minusculo

  const [formData, setFormData] = useState({
    id: new Date().getTime().toString(),
    name: "",
    price: "",
    stock: "",
    type: "Hot Drink",
    status: "Active ",
    description: ""
    })

    //componente form com todos os inputs com a logica

    const handleSubmit = (event) => {
     event.preventDefault() 
      if (formData.Product.trim() === "" || formData.Price.trim() === "" || formData.Description.trim() === "" || formData.Stock.trim() === ""){
        window.alert("Preencha direito")
    } else {
        addProduct(formData)
        }
    }    

    return {     
        formData,
        setFormData,
        handleSubmit
}
}

export default UseProductForm