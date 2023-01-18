import React from "react";

function Game () {

    return(
        <div className='container mx-auto h-full '>
            <div className='m-1 border-4 border-black h-4/6 mb-6 mt-12 mx-3 md:border-0' >
                <div className='md:flex'>
                <button type='button' className='hidden md:block md:flex-grow-3'>
                    <img className='flex-none' src='src\assets\btn-skip-left.png' />
                </button>
                <div className='flex justify-center md:border-4 md:border-black'>
                    <img className='flex-none m-1' src='src\assets\card3.jpg' alt='Three' />
                </div>
                <button type='button' className='hidden md:block'>
                <img className='flex-none' src='src\assets\btn-skip-right.png' />
                </button>
                </div>
                <div className='flex flex-col md:flex-row justify-center px-12 md:-my-10 md:h-44'>
                    <button type='button' className='btn-answer flex-1'>
                        <span className='btn-answer-text'>
                            ONE
                        </span>
                    </button>
                    <button type='button' className='btn-answer flex-1'>
                        <span className='btn-answer-text'>
                            TWO
                        </span>
                    </button>
                    <button type='button' className='btn-answer flex-1'>
                        <span className='btn-answer-text'>
                            THREE
                        </span>
                    </button>
                </div>
            </div>
            <div className='flex justify-around items-center m-1 md:hidden'>
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