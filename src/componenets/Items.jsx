import React from 'react'
import "./items.css"

const Items = ({className , children}) => {
    return ( 
       
            <div className = {className}> {children}</div>
        
    );
}
 
export default Items;