import { useState, useEffect } from "react";

const UseProductForm = (addProduct) => {

  const [formData, setFormData] = useState({
    Product: "",
    Price: "",
    Stock: "",
    Type: "Hot Drink",
    Status: "Active ",
    Description: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault() 
        if (formData.Product.trim() === "" || formData.Price.trim() === "" || formData.Description.trim() === "" || formData.Stock.trim() === ""){
            window.alert("Preencha direito")
        } else {
            addProduct(formData)
            console.log("Enviado")
        }
    }    

    return {     
        formData,
        setFormData,
        handleSubmit
}
}

export default UseProductForm