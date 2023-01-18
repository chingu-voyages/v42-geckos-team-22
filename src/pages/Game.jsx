import React from "react";

function Game () {

    return(
        <div className='container mx-auto h-screen'>
            <div className='m-1 border-4 border-black h-4/6 mb-6 mt-12 mx-3'>
                <div className='h-3/5 flex justify-center'>
                    <img className='flex-none m-1' src='src\assets\card3.jpg' alt='Three' />
                </div>
                <div className='flex flex-col h-2/5 justify-center px-12'>
                    <button type='button' className='btn-answer '>
                        <span className='btn-answer-text'>
                            ONE
                        </span>
                    </button>
                    <button type='button' className='btn-answer'>
                        <span className='btn-answer-text'>
                            TWO
                        </span>
                    </button>
                    <button type='button' className='btn-answer'>
                        <span className='btn-answer-text'>
                            THREE
                        </span>
                    </button>
                </div>
            </div>
            <div className='flex justify-around items-center h-1/6 m-1'>
                <button type='button' className=''>
                    <img className='flex-none' src='src\assets\btn-skip-left.png' />
                </button>
                <button type='button' className=''>
                    <img className='flex-none' src='src\assets\btn-more-options.png' />
                </button>
                <button type='button' className=''>
                    <img className='flex-none' src='src\assets\btn-skip-right.png' />
                </button>
            </div>
        </div>
    )
}

// rounded-full bg-blue-700 border-2 border-red-800 h-1/3 m-2 border-b-4 border-r-4
export default Game