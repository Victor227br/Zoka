export const getItem = () =>{
    return JSON.parse(localStorage.getItem("productsData")) || [];
}

export const setItem = (dataProducts) => {
    localStorage.setItem('productsData', JSON.stringify(dataProducts))
}