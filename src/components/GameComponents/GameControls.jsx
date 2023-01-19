import React from "react";

function GameControls () {

    return (
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
    )
}

export default GameControls