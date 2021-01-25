import { Link } from "@reach/router"
import axios from "axios"
import React, { useEffect, useState } from "react"

export default props => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
        .then(res => { console.log(res)
            setProduct(res.data)})
        .catch(err => console.log(err)
        )

    }, [])


    return (
        <div>
            <p>Title: {product.title&&product.title}</p>
            <p>Price: {product.price&&product.price}</p>
            <p>Description: {product.description&&product.description}</p>
            <Link to={"/" + product._id + "/edit"}>Edit</Link>
        </div>
    )
}