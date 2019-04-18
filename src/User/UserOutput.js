import React from 'react';
import Radium from 'radium';

const UserOutput = (props) => {
    const style = {
      '@media(min-width: 500px)': {
          width: '450px'
      }
    };
    return (
        <div style={style}>
            <input type="text" onChange={props.changed} value={props.name}/>
            <p>Hi, my name is {props.name}</p>
            <p>Lorem ipsum</p>
            <button onClick={props.click}> DELETE X</button>
        </div>
    )
};
export default Radium(UserOutput);
