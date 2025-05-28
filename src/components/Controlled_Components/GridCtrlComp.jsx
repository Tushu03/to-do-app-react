
import { create } from 'react';

export function Gridfunction(props)
{
 

    if(props.layout ==='grid')
    {

         
        return(
            <div>
                <table className={`table caption-top table-hover ${props.theme}`}>
                    <caption>{props.caption}</caption>
                    <thead>
                        <tr>
                            {
                                props.fields.map(field=><th key={field}>{field}<button className="btn bi bi-sort-alpha-down"></button></th>)

                            }
                            <th>Actions</th>
                        </tr>
                    </thead>
                        <tbody>
                            {
                                props.records.map(record=><tr key={record}>
                                    {
                                        Object.keys(record).map(key=><td key={key}>{record[key]}</td>)

                                    }
                                    
                                    <td><button className="btn btn-warning bi bi-pen-fill"></button>
                                    <button className="btn btn-danger bi bi-trash-fill mx-2"></button>
                                    </td>
                                </tr>)
                            }

                        </tbody>
                        <tfoot className=''>
                            <tr>
                                <td>
                                    <ul className='pagination'>
                                        
                                        <li className='page-item'><a className='page-link'>&laquo;</a></li>
                                        <li className='page-item'><a className='page-link'>1</a></li>
                                        <li className='page-item'><a className='page-link'>2</a></li>
                                        <li className='page-item'><a className='page-link'>3</a></li>
                                        <li className='page-item'><a className='page-link'>&raquo;</a></li>

                                    </ul>

                                </td>

                            </tr>
                        </tfoot>


                
                </table>

            </div>
        )
        
    }
    else if(props.layout ==='card')
    {
        return(
            <div className="d-flex flex-wrap">
                {
                    props.records.map(record =>
                        <div className={`card m-3 p-2 ${props.cardtheme}`} style={{boxShadow:'5px 5px 10px gray',border:'5px 5px solid black',width:'300px'}}>
                            <div className="card-header text-center" style={{height:'120px'}}>
                                <h3>
                                    {
                                        Object.keys(record)[0]
                                    }
                                    : 
                                </h3>
                                <h4>
                                {
                                    record[Object.keys(record)[0]]
                                }
                                </h4>          



                                
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                    <span className='fw-bold'>
                                    {
                                        Object.keys(record)[1]
                                    }
                                    :
                                    </span>
                                    
                                    {
                                        record[Object.keys(record)[1]]
                                    }
                                </p>
                                <p className="card-text">
                                    <span className='fw-bold'>
                                    {
                                        Object.keys(record)[2]
                                    }
                                    :
                                    </span>

                                    
                                    {
                                        record[Object.keys(record)[2]]
                                    }
                                </p>

                            </div>
                            <div className='card-footer'>
                                <button className="btn btn-warning rounded">View Details</button>
                                    
                            </div>



                        </div>
                    )
                }

            </div>

        )
        
    }
    else{
        return( <div className='text-danger'>Invalid Layout
        {
            
        }
        </div>
        

        )
    }

   
}