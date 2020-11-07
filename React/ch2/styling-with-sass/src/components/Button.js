import React from 'react';
import './components/Button.sass';

function Button({children}){
    return <button className="Button">{children}</button>
}

export default Button;