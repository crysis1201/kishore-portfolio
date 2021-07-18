import { Link, withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";



const Arrow = ({location}) => {
    const [routename, setRouteName] = useState('/')

    useEffect(() => {
        switch(location.pathname === routename) {
            case(routename === '/'):
                return(
                    setRouteName('/portfolio')
                );
            case(routename === '/portfolio'):
            return(
                setRouteName('/contactMe')
            );
            case(routename === '/contactMe'):
            return(
                setRouteName('/About')
            );
            case(routename === '/About'):
            return(
                setRouteName('/')
            )
            default:
        }
    },[location]);

    const goBack = () => {
        if (routename === '/portfolio')
        return;
        else {
         window.history.back()
        }
    }
    
    return ( 
        <div className="flex self-center absolute top-1/2 w-full mx-auto justify-between max-w-screen-xl">
            <div onClick={goBack} className="bg-gray-900 rounded-full cursor-pointer p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="#e3e3e3" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" fill="#e3e3e3" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </div>
            <Link to={routename}  className="cursor-pointer bg-gray-900 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="#e3e3e3" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter" fill="#e3e3e3" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </Link>
        </div>
     );
    }

 
export default withRouter(Arrow);