import React from 'react';

function Hello(props)
{
    function DoThis(){
        alert("Button is Pressed.");
    }
    return (
      <>
        <button onClick={DoThis}>Click Me</button>
        <h1>
          Hello {props.name}. I am {props.age}
        </h1>
      </>
    );
}

export default Hello;