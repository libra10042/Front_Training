import React from 'react';
import './components/Button.sass';



// size : large, medium, small
// color : blue, pink, gray
function Button({children}){
    return <button className="Button">{children}</button>
}

Button.defaultProps = {
    size : 'medium',
    color : 'blue'
}


export default Button;