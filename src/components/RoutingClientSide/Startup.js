
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { AmazonSearch } from "../hooks/AmazonUsingContex"
import { useEffect, useState } from "react"
import { FakestoreHome } from "./Home";

import { Products1 } from "./FakstoreProducts";
import { Details } from "./Details";
import { ResultUsingSearch } from "./ResultsUsingSearchQueryStrings";

export function StartUp() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchProducts();
    })

    function fetchProducts() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())

            .then(data => setCategories(data))

    }


    return (
        <BrowserRouter>
            <div className="container-fluid">
                <nav className="nav-fill p-1 mb-3 d-flex justify-content-between bg-black text-white" style={{ height: '50px' }}>

                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="mx-2 navbar-bi-image" alt="Amazon Logo" height="40" style={{ filter: 'invert(2)' }} />



                    <div>
                        <form action={'/results'}>

                        <div className="dropdown input-group" id="menu">

                            <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" data-bs-target="menu">
                                <span className="btn btn-warning bi bi-justify"> All</span>
                            </button>

                            <ul className="dropdown-menu">
                                {
                                    categories && categories.map((category, index) =>

                                        <li key={index} className="dropdown-item"><Link className="nav-link text-dark" to={`products/:${category}`}>{category.toUpperCase()}</Link> </li>)
                                }

                            </ul>
                           
                            <input type="text" className="form-control" name="query" placeholder="Search for products..." />
                            <button type="submit" className="btn btn-warning bi bi-search"></button>

                        

                        </div>
                    </form>

                    </div>
                    <div className="d-flex p-2">
                        <div className="mx-1">
                            <button className="btn btn-warning bi bi-heart"></button>
                        </div>
                        <div className="mx-1">
                            <button className="btn btn-warning bi bi-cart-plus"></button>

                        </div>

                        <div className="mx-1">


                            <button className="btn btn-danger bi bi-person" >Sign in</button>



                        </div>
                    </div>
                </nav>
                <section className='mt-4'>
                    <Routes>
                        <Route path="/" element={<FakestoreHome />} />
                        <Route path="products/:category" element={<Products1 />} >
                            <Route path="products/:category/:id" element={<Details />} />
                        </Route>
                        <Route path="results" element={<ResultUsingSearch/>}/>




                    </Routes>



                </section>


            </div >
        </BrowserRouter >
    )
}