import React from 'react';
import {Link} from 'react-router-dom';

export default function Colors() {
    let colors = ['purple', 'green', 'red'];
    let btns = colors.map( color => {
        return(
            <Link to={`results/${color}`}>
                <button>{color}</button>
            </Link>
        )
    }) 
        return(
        <div>
            <h1>Please pick a color</h1>
            {btns}

            {/* Old way */}
            {/* <Link to={`/results/${'purple'}`> <button>Purple</button> </Link>
            <Link to={``}><button>Green</button></Link>
            <Link to={``}><button>Red</button></Link> */}

            
        </div>

    )
}