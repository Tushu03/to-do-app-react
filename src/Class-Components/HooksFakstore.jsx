import React from "react"
import axios from "axios"
export class FakeStore extends React.Component {
    constructor() {
        super()

        this.state = {
            products: [{id:'',title:'',description:'',price:'',image:''}],
            Categories: [{name:''}],
        }
    }

    LoadCategories() {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(response => {
                this.setState({ Categories: response.data })
            })

    }
    LoadProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                this.setState({ products: response.data })
            })
    }

    componentDidMount() {
        this.LoadCategories();
        this.LoadProducts();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="mx-auto bg-black text-white w-50">
                    <h2 className="text-center">Categories </h2>
                    <select className="form-switch w-25 mx-auto">
                        <option >Select Category...</option>
                        {
                            this.state.Categories.map(category => 
                                <option key={category.name}>{category.name}</option>
                            )
                        }
                    </select>
                </div>

                <div className="d-flex flex-wrap">
                    {
                       this.state.products.map(product =>
                        
                            <div key={product.id} className="card h-50 mx-2 my-2" style={{boxShadow:'2px 5px 3px 2px  gray',width:'400px',height:'100px'}}>
                                <img src={product.image} alt="Card image cap" width={'100px'} height={'100px'}  />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <a className="btn btn-warning bi bi-cart">Buy Now</a>
                                </div>
        
                            </div>

                       )
                    }

                </div>



            </div>
        )
    }






}
