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

    // const [products, setProducts] = useState([])     
    const products = []

    const handleSubmit = (event) => {
        event.preventDefault() 
        if (formData.Product.trim() === "" || formData.Price.trim() === "" || formData.Description.trim() === "" || formData.Stock.trim() === ""){
            window.alert("Preencha direito")

        } 
    //     setProducts((products) =>{
    //     return[...products, formData]
    //     } )
    }

    const productsJson = JSON.stringify(products)
    console.log(productsJson)

    return {
        formData,
        setFormData,
        products,
        setProducts,
        handleSubmit
    }
}

export default UseProductForm