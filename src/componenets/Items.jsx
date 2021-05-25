import React from 'react'
import "./items.css"

const Items = (props) => {
    return ( 
       
            <div className="item">{props.children}</div>
        
    );
}
 
export default Items;