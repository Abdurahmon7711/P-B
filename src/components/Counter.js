import React from 'react';

const Counter = () => {
    return (

        <div className="counter">
           
                
                    <div className="col-md-3 counter_col">
                        <div className="count_icon">
                            <i className="fas fa-flag"></i>
                            <h3>2,500</h3>
                        </div>
                        <p>PROJECT COMPLETED</p>
                    </div>
                    <div className="col-md-3 counter_col">
                        <div className="count_icon">
                            <i className="far fa-smile"></i>
                            <h3>400</h3>
                        </div>
                        <p>HAPPY CLIENTS</p>
                    </div>
                    <div className="col-md-3 counter_col">
                        <div className="count_icon">
                            <i className="fas fa-code"></i>
                            <h3>98k</h3>
                        </div>
                        <p>LINE OF CODE</p>
                    </div>
                    <div className="col-md-3 counter_col">
                        <div className="count_icon">
                            <i className="fas fa-coffee"></i>
                            <h3>78k</h3>
                        </div>
                        <p>CUP OF COFFEE</p>
                    </div>
              
        </div>

    );
};


export default Counter;