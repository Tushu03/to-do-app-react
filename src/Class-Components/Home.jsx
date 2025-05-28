import React from "react"
export class Home extends React.Component 
{
    constructor() {
        super()
        this.state = {
            title: 'Welcome to Home Page',
            Categories: ['Electronics', 'Fashion', 'Beauty'],
            Brand: 'Amazon',
            MenuItems: ['Home', 'About Us', 'Contact Us'],
            


        }
       
    }
    render() {
        return (
            <div className="container bg-black text-white">
                <h1 className="text-center">{this.state.Brand}</h1>
                <h3 className="text-center">{this.state.title}</h3>
                <ul>
                    { this.state.MenuItems.map(cat => <li key={cat}>{cat}</li>)}
                </ul>
                {<button onClick={() => this.setState({Brand: 'Flipkart'})} className="btn btn-warning mt-2 mx-auto">Change Title</button>}

            </div>

        )
    }

   

}

// States in Class Component 

// constructor() {
//     super()
//     this.state = {
//         title: 'Welcome to Home Page',
//         Categories: ['Electronics', 'Fashion', 'Beauty']

//     }
//     this.state = {
//         Brand: 'Amazon',
//         MenuItems: ['Home', 'About Us', 'Contact Us'],

//     }
// }
// render() {
//     return (
//         <div>
//             <h1 className="text-center">{this.state.title}</h1>
//             <ul>
//                 { this.state.MenuItems.map(cat => <li key={cat}>{cat}</li>)}
//             </ul>
//         </div>

//     )
// }