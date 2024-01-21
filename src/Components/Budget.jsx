import React from "react";

function Budget(props) {
  return (
    <div>
      <h2>My Budget Planner</h2>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            Budget: Rs.2000
          </div>
          <div class="col">
            Remaining: Rs.
          </div>
          <div class="col">
            Spent so far: Rs
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;
