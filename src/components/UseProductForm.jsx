import { useState, useEffect } from "react";
// import { getItem,setItem } from "../services/ProductService";

const UseProductForm = () => {

    const [formData, setFormData] = useState({
        Product: "",
        Price: "",
        Stock: "",
        Type: "Hot Drink",
        Status: "Active ",
        Description: ""
    })
    
    const [products, setProducts] = useState([])
    // 1-Pegar o objeto e inserir no array
    // 2-Manter os dados no array e adicionar um novo item no array
    // 3-Transformar esse array em json
    // 4-Pegar o json do localstorage, manter os dados salvos e adicionar um novo  

    useEffect(() =>{
        const getDataProducts = JSON.parse(localStorage.getItem('productsData')) ? JSON.parse(localStorage.getItem('productsData')) : [];
        setProducts(getDataProducts)
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault() 
        if (formData.Product.trim() === "" || formData.Price.trim() === "" || formData.Description.trim() === "" || formData.Stock.trim() === ""){
            window.alert("Preencha direito")
        } else {
            console.log("Enviado")
            setProducts((products) =>{
                return[...products, formData]
            })
        }
    }    

        useEffect(() => {
        localStorage.setItem('productsData', JSON.stringify(products))
        },[products])

    
    return {   
        formData,
        setFormData,
        handleSubmit
}
}

export default UseProductForm