import React from 'react'
import "./items.css"
// distructure from props
const Items = ({className , children}) => {
    return ( 
       
            <div className = {className}> {children}</div>
        
    );
}
 
export default Items;