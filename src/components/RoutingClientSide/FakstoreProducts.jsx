import { Outlet, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"

import { Link } from "react-router-dom";

export function Products1() {
    const [products, setProducts] = useState([{ id: 0, title: '', category: '', price: 0, image: '', rating: { rate: 0, count: 0 }, description: '' }]);

    let params = useParams()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
            .then(response => {
                setProducts(response.data);
            })
    }, [params.category])

    return (
        <div>
            <h1 className="text-center">Products in {params.category} category</h1>
            <div className="row">
                <div className="col-3">
                    <div className="d-flex flex-wrap" style={{height:'300px'}}>
                        {
                            products.map(product =>
                                <div key={product.id} className="card mx-2 my-2 w-25" style={{ boxShadow: '5px 5px 5px gray' }}>
                                    <img src={product.image} alt={product.title} className="card-img-top mx-auto" style={{ width: '50px', height: '50px' }} />

                                    <div>
                                        <Link className="w-100 btn btn-warning bi bi-eye w-25" to={`products/${product.category}/${product.id}`}>View Details</Link>
                                    </div>

                                </div>
                            )
                        }
                    </div>


                </div>
                <div className="col-9">
                    <Outlet/>
                    

                </div>
            </div>

        </div>
    )
}