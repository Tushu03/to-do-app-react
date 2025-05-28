import { createContext, useState,useContext } from "react"

let parentContext=createContext(null);


export function ContextDemo()
{
    const [name,setName]=useState('');

    function handleChange(e)
    {
        setName(e.target.value);
    }

    return(
        <div className="container-fluid bg-dark text-white p-4">
            <h2>Parent Context</h2>
            <input type="text" onChange={handleChange} placeholder="Enter name"></input>
            <parentContext.Provider value={name}>
                <ChildComp/>

            </parentContext.Provider>

        </div>
    )
}

export function ChildComp()
{
    const name=useContext(parentContext);
    return(
        <div className="bg-info text-white m-4 p-4">
            <h2>Child Component</h2>
            <p>Hello, {name}</p>
            <SubChild/>
        </div>
    )
}

export function SubChild()
{
    const name=useContext(parentContext);
    return(
        <div className="bg-success text-white m-4 p-4">
            <h2>SubChild Component</h2>
            <p>Hello, {name}</p>
        </div>
    )
}