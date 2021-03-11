import React from 'react'
import {Link} from 'react-router-dom'

function Nav(){

    return(

        <div>
            <nav>
                <Link to='/' className='navlink navlink-left'>
                    <li>Home</li>
                </Link>
                <Link to='/History' className='navlink'>
                    <li>History</li>
                </Link>
                
            </nav>
        </div>
    )
}


export default Nav;