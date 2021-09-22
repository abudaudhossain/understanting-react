import React from 'react';
import Prices from '../Prices/Prices';

const Device = (props) => {
    return (
        <div style={{border: "2px solid blue", margin: '10px'}}>
            <h1>This is my Device: {props.name}</h1>
            <h4>Steps: {props.steps}</h4>
            <Prices price = {props.price} steps = {props.steps}></Prices>
        </div>
    );
};

export default Device;