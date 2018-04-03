import React from 'react';
// add link from react router dom for links to work
import {Link} from 'react-router-dom';

export default function FirstRoute() {
    return(
        <div>
        <h1>I am the first route!</h1>
        <Link to='/second'>
            <button>Second</button>
        </Link>
        <Link to='/third'>
            <button>Third</button>
        </Link>
        </div>
    );
}