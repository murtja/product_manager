import axios from "axios"
import React, { useEffect, useState } from "react"
import ProductForm from '../Components/ProductForm';
import ProductList from '../Components/ProductList';


export default () => {
    const [product, setProduct] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:8000/api/product").then((res) => {
            setProduct(res.data)
            setLoaded(true)
        })
    }, [])

    const removeFromDom = (productId) => {
        setProduct(product.filter((product) => product._id != productId))
    }

    return (
        <div>
            <h1>Add a Product</h1>
            <ProductForm/>
            <hr />
            <h1>All Products</h1>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}