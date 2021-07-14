import React from "react";

const header = () => {
    return ( 
        <div className="header flex justify-between text-white"> 
            <div className="Logo font-bold text-xl">
                Kishore Kumar
            </div>
            <div className="Navigation flex gap-8 text-md uppercase font-semibold">
                <div>Home</div>
                <div>Portfolio</div>
                <div>About</div>
                <div>Contact Me</div>
            </div>
        </div>
     );
}
 
export default header;