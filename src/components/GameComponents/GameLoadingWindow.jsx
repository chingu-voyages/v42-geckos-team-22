import React, { useState, useEffect } from 'react';


function GameLoadingWindow (props) {

    const [progress, setProgress ] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setProgress(prev => prev + 5)
        }, 100);
    }, [])

    if(progress >= 100) {
        props.setGameState("play")
    }

      console.log("progress", progress)
    return (
        <div className={props.cname}>
            <div className='row-start-1 row-end-2 w-full bg-red-orange' />
            <div className='row-start-2 row-end-5 flex flex-col justify-center text-center mx-10'>   
                <p className='text-7xl mb-5'>Loading...</p>
                <div className="w-full h-16 bg-white border-2 border-black flex flex-col justify-center">
                    <div className="h-12 hashed-progress" style={{width: `${progress}%`} }/>   
                </div>
            </div>
        </div>
    )
}

export default GameLoadingWindow