import { use, useEffect, useState } from "react";
import { Gridfunction } from "../Controlled_Components/GridCtrlComp";
import axios from "axios";
import { create } from 'react';


export function AccessGrid()
{
    const [employee,setEmployee]= useState([{Name:'John',LastName:'David',Salary:15000},
        {Name:'Tushar',LastName:'Veer',Salary:'20000'},{Name:'Vishal',LastName:'Devkar',Salary:'25000'}
    ]);

    const [layout,setLayout]=useState('');


    function handleLayout(e)
    {
        setLayout(e.target.value);
    }


   



    

      

    const [products,setProducts]= useState([{Id:0,title:'',Price:15000,description:'',category:''}]);
    useEffect(()=>{
        axios.get('/products.json')
        .then(response => {
            setProducts(response.data);
    })
    })
    

    return(
        <div className="container-fluid">
            <div className="text-center">
                <h1 >Select Layout : </h1>
                <select onChange={handleLayout} className="form-select text- my-2 w-25 mx-auto">
                    <option value="0">Select layout</option>
                    <option value="grid">Grid</option>
                    <option value="card">Card</option>
                </select>
               
            </div>
            <h3 className="text-center">Employee Details</h3>
            <Gridfunction layout={layout} caption='Employee Details' cardtheme='bg-dark text-white'  theme='table-dark text-white' fields={['FirstName','LastName','Salary']} records={employee}/>
            <h3 className="my-3 text-center mt-3">Product Details</h3>
            <Gridfunction layout={layout} caption='Product Details' cardtheme='bg-dark text-white' theme='table-primary text-dark' fields={['Title','Price','description','category']} records={products}/>



        </div>
        
    )
}