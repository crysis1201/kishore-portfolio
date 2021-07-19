import { Link, withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";



const Arrow = ({location}) => {

    const [routeNameRight, setRouteNameRight] = useState('/')

    useEffect(() => {
        switch(location.pathname === routeNameRight) {
            case(routeNameRight === '/'):
                return(
                    setRouteNameRight('/portfolio')
                );
            case(routeNameRight === '/portfolio'):
            return(
                setRouteNameRight('/about')
            );
            case(routeNameRight === '/about'):
            return(
                setRouteNameRight('/contactme')
            );
            case(routeNameRight === '/contactme'):
            return(
                setRouteNameRight('/')
            )
            default:
        }
    },[location.pathname]);

    return ( 
        <Link to={routeNameRight}  className="cursor-pointer bg-gray-900 rounded-full p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="#e3e3e3" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" fill="#e3e3e3" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </Link>
    );
}

 
export default withRouter(Arrow);