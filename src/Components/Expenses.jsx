import React from 'react';
import "./Expenses.css";
import {useOurContext} from './Context';
function Expenses(props) {
    let ctx=useOurContext();
    return (
        <div>
           <h2>Expenses</h2>
            <div className="expensesDisplay">
            {
                ctx.LocalStorageData.map((ele,index)=>{
                    return <div className="singleElement" key={index}>
                        <p>{ele.name}</p>
                        <p>{ele.cost}</p>
                        <td id={index} onClick={(e)=>{
                            ctx.DeleteElement(e);
                            ctx.Calculation();
                          }}>Delete</td>
                    </div>
                })
            }
            </div>
        </div>
    );
}

export default Expenses;