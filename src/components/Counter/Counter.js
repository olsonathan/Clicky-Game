import React from "react";

  function Counter(props) {
    
  

  // The render method returns the JSX that should be rendered
  render() {
    return (
      
        
        <div className="card-body">
          <p className="card-text">Click Count: {props.state.count}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increment
          </button>{" "}
          <button className="btn btn-danger" onClick={this.handleDecrement}>
            Decrement
          </button>
        </div>
     
    );
  }
}

export default Counter;
