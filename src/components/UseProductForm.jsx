import { useState, useEffect } from "react";
import { setItem } from "../services/ProductService";

const UseProductForm = () => {

    function generateIDProduct () {
        
    }

    const [formData, setFormData] = useState({
        Product: "",
        Price: "",
        Stock: "",
        Type: "Hot Drink",
        Status: "Active ",
        Description: ""
    })

    const [products, setProducts] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault() 
        if (formData.Product.trim() === "" || formData.Price.trim() === "" || formData.Description.trim() === "" || formData.Stock.trim() === ""){
            window.alert("Preencha direito")
        } else {
            console.log("Enviado")
            setProducts((products) => {
                return [...products, formData]
            })
        } 
        setItem(products)
}
  
    return {
        formData,
        setFormData,
        handleSubmit
    }
}

export default UseProductForm