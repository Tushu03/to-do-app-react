import { useSort, useTitleCase } from "./hooksTask"
import { useState,useEffect } from "react";

export function UseHooks()
{

    const [text, setText]=useState('');
    const titledText=useTitleCase(text);

    const list=["F", "A", "D", "B", "E", "K"];

    const sortedList=useSort(list);
    const ReversedList=useSort(list,true);


   
    return(
        <div className="container-fluid">
            <div className="row d-flex justify-content-between">
                <div className="col-5 bg-warning text-white border border-2 mt-2"  style={{boxShadow:'5px 5px 5px gray'}}>
                    <h1 className="text-center">useTitleCase</h1>
                    <input type="text" className="form-control" value={text}  onChange={(e) => setText(e.target.value)}/>
                    <strong style={{ color: "black"}}>{titledText}</strong>

                </div>
                <div className="col-5 bg-dark text-white border border-2 mt-2 mx-2"   style={{boxShadow:'5px 5px 5px gray'}}>
                    <h1 className="text-center">List Sorting </h1>
                    <p className="text-center">
                        <strong>Original List:  </strong>
                        {
                          list ?.join(', ')
                        }
                    </p>
                    <p className="text-center">
                        <strong>Sorted List:  </strong>
                        <span className="text-danger">
                            {
                            
                            sortedList?.join(', ')
                            }

                        </span>
                      
                    </p>
                    <p className="text-center">
                        <strong>Reversed List:  </strong>
                        <span className="text-warning">
                        {
                            
                            ReversedList ?.join(', ')
                        }

                        </span>
                        
                    </p>

                   



                   

                   


                   
                </div>

            </div>
           

        </div>
    )
   
}