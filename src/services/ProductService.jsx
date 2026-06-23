
// export default saveItem = () => {
    
// }

export const getItem = () => {
   const getProducts = localStorage.getItem('productsData', JSON.parse('productsData'));
   return getProducts ? JSON.parse(products) : []
}

export const setItem = (products) => {
    localStorage.setItem('productsData', JSON.stringify(products))
}