import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export function FakestoreHome(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{

        axios.get(`https://fakestoreapi.com/products/categories`)
        .then(response=>{
             setCategories(response.data);
        })

    },[])

    return(
        <div >
            <h5>Available Categories </h5>
            <ul className="list-unstyled">
                {
                    categories.map(category=><li className="my-3 p-2" key={category}> <Link className="btn btn-dark w-25" to={`products/${category}`}>{category.toUpperCase()}</Link> </li>)
                }
            </ul>
        </div>

    )
    
        
    
}