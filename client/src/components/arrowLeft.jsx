import { Link, withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";



const Arrow = ({location}) => {

    const [routeNameLeft, setRouteNameLeft] = useState('/')

    useEffect(() => {
        switch(location.pathname === routeNameLeft) {
            case(routeNameLeft === '/'):
                return(
                    setRouteNameLeft('/contactme')
                );
            case(routeNameLeft === '/contactme'):
            return(
                setRouteNameLeft('/about')
            );
            case(routeNameLeft === '/about'):
            return(
                setRouteNameLeft('/portfolio')
            );
            case(routeNameLeft === '/portfolio'):
            return(
                setRouteNameLeft('/')
            )
            default:
        }
    },[location]);

    return ( 
        <Link to={routeNameLeft} className="bg-gray-900 rounded-full cursor-pointer p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="#e3e3e3" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" fill="#e3e3e3" className="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
        </Link>
     );
    }

 
export default withRouter(Arrow);