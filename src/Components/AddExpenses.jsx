import React, { useEffect, useRef, useState } from "react";
import "./AddExpenses.css";
import Expenses from "./Expenses";
import {useOurContext} from './Context';
function AddExpenses() {
  let ctx=useOurContext();
  return (
    <div className="displayAdd">
      
      <h2>Add Expenses</h2>
      <div className="addingElements">
        <form action="" onSubmit={(event)=>{
          ctx.handleSubmit(event);
          ctx.Calculation();
        }}>
          <div className="elementName">
            <label htmlFor="">Name</label>
            <input type="text" ref={ctx.nameRef} />
          </div>
          <div className="elementCost">
            <label htmlFor="">Cost</label>
            <input type="number" ref={ctx.costRef} />
          </div>
          <button>Save</button>
        </form>
      </div>

      <Expenses />
    </div>
  );
}

export default AddExpenses;
