import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { FormTask } from "../Tasks/FormTask";



let Context = createContext(null);



export function Amazon() {
    const [searchTerm, setSearchTerm] = useState('');
    const [search, setSearch] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);



    async function handleChange(e) {
        setSearchTerm(e.target.value);

    }

    async function handleClick(e) {
        setSearch(searchTerm);

    }

    async function handleTabChange(category) {
        setSearch(category);

    }

    async function handleSignIn(e) {
        
        sessionStorage.setItem('userName', userName);
        setIsLoggedIn(true)
    }

    async function handleNameChange(e) {
        setUserName(e.target.value);
    }

    async function handleEmailqChange(e) {
        setEmail(e.target.value);
    }

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('userName');
        if (storedUsername) {
            setUserName(storedUsername);
            setIsLoggedIn(true);
        }
    }, []

    );



    return (
       
        <div className="container-fluid">
            <nav className="nav-fill p-1 d-flex justify-content-between bg-black text-white" style={{ height: '50px' }}>

                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="mx-2 navbar-bi-image" alt="Amazon Logo" height="40" style={{ filter: 'invert(2)' }} />



                <div>

                    <div className="dropdown input-group" id="menu">

                        <button className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" data-bs-target="menu">
                            <span className="btn btn-warning bi bi-justify"> All</span>
                        </button>

                        <ul className="dropdown-menu">
                            <li className="dropdown-item"><button className="btn w-100 text-start" onClick={() => handleTabChange('')}>All Categories</button></li>
                            <li className="dropdown-item"><button className="btn w-100 text-start" onClick={() => handleTabChange('beauty')}>Beauty</button></li>
                            <li className="dropdown-item"><button className="btn w-100 text-start" onClick={() => handleTabChange('smartphones')}>Smartphones</button></li>
                            <li className="dropdown-item"><button className="btn w-100 text-start" onClick={() => handleTabChange('laptops')}>Laptops</button></li>
                            <li className="dropdown-item"><button className="btn w-100 text-start" onClick={() => handleTabChange('furniture')}>Furniture</button></li>

                        </ul>
                        <input type="text" className="form-control" placeholder="Search for products..." onChange={handleChange} />
                        <button className="btn btn-warning bi bi-search" onClick={handleClick}></button>
                    </div>

                </div>
                <div className="d-flex p-2">
                    <div className="mx-1">
                        <button className="btn btn-warning bi bi-heart"></button>
                    </div>
                    <div className="mx-1">
                        <button className="btn btn-warning bi bi-cart-plus"></button>

                    </div>

                    <div className="mx-1">
                        {!isLoggedIn ?
                            <button className="btn btn-warning bi bi-person-circle" data-bs-toggle="modal" data-bs-target="#login"> Sign In</button>
                            :
                            <div>
                                <span className="mx-2">Hello, {userName}</span>
                                <button className="btn btn-danger bi bi-person" onClick={() => setIsLoggedIn(false)}>Sign Out</button>
                            </div>
                        }

                    </div>
                </div>

                <div className="modal" id="login" style={{ boxShadow: '5px 5px 5px rgb(230, 43, 43)' }}>
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable"  >
                        <div className="modal-content bg-dark text white">
                            <div className="modal-header">
                                <h5 className="bi bi-person text-center">User Sign In</h5>
                                <button type="button" className="btn-close overflow-auto" data-bs-dismiss="modal" aria-label="Close"></button>

                            </div>
                            <div className="modal-body">
                                <dl>
                                    <dt>User Name : </dt>
                                    <dd><input type="text" className="form-control" name="username" onChange={handleNameChange} /></dd>
                                    <dt>Email : </dt>
                                    <dd><input type="email" className="form-control" name="email" onChange={handleEmailqChange} /></dd>

                                </dl>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSignIn}>Sign In </button>
                            </div>

                        </div>
                    </div>
                </div>
            </nav>


            <div className="bg-dark m-0" style={{ height: '50px' }}>

                <ul className="nav nav-tabs p-2 ">


                    <li className="nav-item fw-bolder"><button onClick={() => handleTabChange('')} className="nav-link text-white">Home</button></li>
                    <li className="nav-item fw-bolder"><button onClick={() => handleTabChange('beauty')} className="nav-link text-white">Beauty</button></li>
                    <li className="nav-item fw-bolder"><button onClick={() => handleTabChange('smartphones')} className="nav-link text-white">Smartphones</button></li>
                    <li className="nav-item fw-bolder"><button onClick={() => handleTabChange('laptops')} className="nav-link text-white">Laptops</button></li>
                    <li className="nav-item fw-bolder"><button onClick={() => handleTabChange('furniture')} className="nav-link text-white">Furniture</button></li>



                </ul>

            </div>

            <section className="mt-4">
                <Context.Provider value={search}>
                    <AmazonSearch />
                </Context.Provider>

            </section>

        </div>
    )

}

export function AmazonSearch() {
    const search = useContext(Context);
    const [product, setProduct] = useState([{ id: 0, title: '', images: [''], description: '', price: 0 }])

    useEffect(() => {
        async function fetchData()
        {
            if (search) {
                await axios.get(`https://dummyjson.com/products/category/${search}`)
                    .then(response => {
                        if (response.data && Array.isArray(response.data.products)) {
                             setProduct(response.data.products);
                        } else {
                            setProduct([]);
                        }
                    })
    
            }
            else {
               await axios.get(`https://dummyjson.com/products`)
                    .then(response => {
                        if (response.data && Array.isArray(response.data.products)) {
                            setProduct(response.data.products);
                        } else {
                            setProduct([]);
                        }
    
                    })
            }
        }
        fetchData();


    }, [search])


    return (
        <div className="p-4">
            
            <div className="d-flex flex-wrap">
                {
                    product.map(product =>
                        <div key={product.id} className="col-3 my-3">
                            <div className="card m-2 border border-2 p-2 rounded rounded-2" style={{ boxShadow: '3px 3px 3px gray', height: '550px' }}>
                                <img src={product.images[0]} alt={product.Name} className="card-img-top w-50 text-center" width='150px' height='200px'
                                />
                                <div className="card-header">
                                    <button className=" btn btn-outline-danger bi bi-heart card me-1 rounded rounded-3"></button>
                                </div>


                                <div className="card-body p-4">
                                    <div> <h5 className="card-title">{product.title}</h5></div>
                                    <div>
                                        <p className="card-text">{product.description}</p>
                                    </div>



                                </div>
                                <div className='card-footer'>
                                    <p className="card-text"><strong>Price: ${product.price}</strong></p>
                                    <button className="btn btn-warning bi bi-cart-plus rounded"> Add to Cart</button>
                                </div>

                            </div>
                        </div>
                    )
                }
            </div>

        </div>
    )




}

