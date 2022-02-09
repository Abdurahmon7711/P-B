import React,{useState} from 'react';
import Fade from 'react-reveal/Fade';
 
const Filter2 = () => {
    const [show, setShow]= useState(false);


    const handleClick=()=> {
        setShow(!show );
      }
    return (
        <h1>
          <Fade left cascade collapse when={show}>
            React Reveal
          </Fade>
          <button
            className="btn btn-success my-5"
            type="button"
            onClick={handleClick}
          >
            {show ? 'Hide' : 'Show' } Message
          </button>
        </h1>
      );
};

 
export default Filter2;