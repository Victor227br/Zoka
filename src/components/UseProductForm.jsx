import { useState } from "react";

const UseProductForm = () => {

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
        } 
}

    return {
        formData,
        setFormData,
        handleSubmit
    }
}

export default UseProductForm