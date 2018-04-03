import React from 'react';
import {Link} from 'react-router-dom';

export default function SecondRoute() {
    return(
        <div>
            <h1>I am the second route!</h1>
            <Link to='/'><button>First Route</button></Link>    
            
            <Link to='/third'><button>Third Route</button></Link>
        </div>
    );
}