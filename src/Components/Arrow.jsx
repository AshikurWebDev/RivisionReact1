import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

// function Arrow()
// {
//     return (
//         <button>My Button</button>
//     );
// }

const AlertMe = (a)=>{
    alert(a);
}

const Arrow = ()=>{
    return (
        <button onClick={AlertMe.bind(this, "I am Clicked")} className="btn btn-success">My Button</button>
    );
}

export default Arrow;