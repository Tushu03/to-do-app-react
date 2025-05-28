import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"


export function ResultUsingSearch(){


    const [products, setProducts] = useState([{id:0, title:'', category:'', price:0, image:'', rating:{rate:0, count:0}, description:''}])

    let [searchparams] = useSearchParams();

    useEffect(()=>{
        axios.get(`https://fakestoreapi.com/products/category/${searchparams.get('query')}`)
        .then(response=>{
            setProducts(response.data);
        })
    },[])

    return(
        <div>
            <h2>Search Result</h2>
            <div className="d-flex flex-wrap">
                {
                     products.map(product=>
                        <img key={product.id} src={product.image} className="mx-2" width='100'  height='100'/>
                     )
                }
            </div>
        </div>
    )
}