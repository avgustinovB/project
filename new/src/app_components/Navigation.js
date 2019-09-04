import React from 'react'
import { NavLink, withRouter } from "react-router-dom";


const Navigation = (props) => { 

    let b = props;
    debugger;

    const linksArray = ['/home&kitchen', '/sports&outdoors', '/babyProducts', '/health&personalcare'];

    let a = props
    
    return (
        <div>
            <NavLink to={{ 
                    pathname: '/home',
                    search: props.location.search
                }}
            >
                Main
            </NavLink>
            { linksArray.length && linksArray.map(data => (
                <div>
                    <NavLink to={{ 
                        pathname: data,
                        search: props.location.search
                        }} 
                    > 
                        {data}
                    </NavLink>
                </div>
                ))
            }
        
        </div>
    )
}
export default withRouter(Navigation);