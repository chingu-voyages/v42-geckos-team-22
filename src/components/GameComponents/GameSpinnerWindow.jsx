import React from 'react';


function GameSpinnerWindow (props) {

    let circleCommonClasses = 'h-2.5 w-2.5 bg-red-orange rounded-full';

    return (
                    <div className="flex flex-col justify-center items-center mt-24">
                    <p className="p-4 font-semibold">Loading...</p>
                    <div className="flex">
                        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                        <div className={`${circleCommonClasses} animate-bounce`}></div>
                    </div>
                    </div>
                    
                    )
     
}

export default GameSpinnerWindow