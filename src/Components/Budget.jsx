import React from "react";
import "./Budget.css";
import {useOurContext} from './Context';
function Budget() {
  let ctx=useOurContext();
  return (
    <div>
      <h2>My Budget Planner</h2>
      <div class="container text-center">
        <div class="row">
          <div class="border col">
            Budget: Rs.2000
          </div>
          <div class="border col">
            Remaining: Rs. {2000-ctx.MoneyUsed}
          </div>
          <div class="border col">
            Spent so far: Rs {ctx.MoneyUsed}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;
