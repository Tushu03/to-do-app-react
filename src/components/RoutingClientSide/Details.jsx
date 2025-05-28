
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"

import { Link } from "react-router-dom";
export function Details(){


    const [product, setProduct] = useState({id:0, title:'', category:'', price:0, image:'', rating:{rate:0, count:0}, description:''});

    let params = useParams();

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProduct(response.data);
        })

    },[params.id])

    return(
        <div>
           
            <div className="card mx-2 my-4 w-50">
                <h3 className="text-center">Product Details</h3>
                <img src={product.image} className="card-img-top mx-auto" style={{width:'150px',height:'150px'}}/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">Price: ${product.price}</p>
                    <p className="card-text">Category: {product.category}</p>
                    <p className="card-text">Rating: {product.rating.rate} ({product.rating.count} ratings)</p>
                    <p className="card-text">{product.description}</p>
                    <Link to={`/products/${product.category}`} className="btn btn-primary">Back to Products</Link>
                </div>
                <div className="btn btn-warning bi bi-cart">
                    Add to Cart
                </div>
            </div>
           
            
        </div>
    )
}
