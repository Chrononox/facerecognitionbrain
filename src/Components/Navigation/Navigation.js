import React from 'react';
import './Navigation.css'

const Navigation = ({onRouteChange, isSignedIn}) =>{
        if(isSignedIn){
            return(
                <nav>
                    <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
                    {/* // callback to make it run on click not when loaded */}
                </nav>
            )
        }else {
            return(
                <nav>
                    <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                    <p onClick={() => onRouteChange('home')} className='f3 link dim black underline pa3 pointer'>Register</p>      
                </nav>
            )
        }
}

export default Navigation

