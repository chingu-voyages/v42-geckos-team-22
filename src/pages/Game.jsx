import React from "react";

function Game () {

    return(
        <div className='container mx-auto h-screen'>
            <div className='m-1 border-2 border-black h-4/6 mb-6 mt-12'>
                <div className='h-3/5'>
                
                Card Window
                </div>
                <div className='flex flex-col h-2/5 justify-center px-12'>
                    <button type='button' className='btn-answer-primary '>
                        one
                    </button>
                    <button type='button' className='btn-answer-primary'>
                        two
                    </button>
                    <button type='button' className='btn-answer-primary'>
                        three
                    </button>
                </div>
            </div>
            <div className='border-2 border-black h-1/6 m-1'>
                Game Controls
            </div>
        </div>
    )
}

// rounded-full bg-blue-700 border-2 border-red-800 h-1/3 m-2 border-b-4 border-r-4
export default Game