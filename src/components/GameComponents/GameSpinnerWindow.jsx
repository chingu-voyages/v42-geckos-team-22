import React from 'react';


function GameSpinnerWindow (props) {

    let circleCommonClasses = 'h-2.5 w-2.5 bg-red-orange rounded-full';

    return (
        <div className={props.cname}>
            <div className='row-start-1 row-end-2 w-full bg-red-orange' />
            <div className='row-start-2 row-end-5 flex flex-col justify-center text-center mx-10'>   
                <div className="w-full h-16 bg-white border-2 border-black flex flex-col justify-center">
                    <div className="flex justify-center items-center">
                        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                        <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
                        <div className={`${circleCommonClasses} animate-bounce`}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameSpinnerWindow