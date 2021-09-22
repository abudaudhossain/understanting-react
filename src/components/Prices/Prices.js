import React from 'react';

const Prices = (props) => {
    return (
        <div style={{border: "3px solid red", margin: "10px"}}>
            <h3>Price: {props.price}</h3>
            <h2>Steps: {props.steps}</h2>
        </div>
    );
};

export default Prices;