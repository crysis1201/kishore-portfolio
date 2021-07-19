import React from "react";

const progressDiv  = ({levels}) => {
    return (    
        <div className="pt-6 mt-10">
            {levels
                .map(levels => (
                <div key={levels.title}>
                    <div className="w-full rounded-sm max-w-xl h-4 overflow-hidden bg-gray">
                        <div data-aos="slide-right" className="load" style={levels.style}></div>
                    </div>
                    <div className="flex gap-24 text-xl pt-6 ">
                        <p>
                            {levels.percent }
                        </p>
                        <p>
                            {levels.title}
                        </p>
                    </div>
                </div>
            ))}
            
        </div>
      );
}
 
export default progressDiv;