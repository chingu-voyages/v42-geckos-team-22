import React from 'react';


function GameSpinnerWindow (props) {

    let circleCommonClasses = 'h-2.5 w-2.5 bg-red-orange rounded-full';

    return (
       
                    <div className="flex justify-center items-center">
                        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                        <div className={`${circleCommonClasses} animate-bounce`}></div>
                    </div>
                    
                    )
     
}

export default GameSpinnerWindow