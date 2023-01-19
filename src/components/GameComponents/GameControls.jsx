import React from "react";
import { SkipLeft, SkipRight, MoreOptions } from '../GameComponents/utilities';

function GameControls () {

    return (
        <div className='flex justify-around items-center m-1 md:hidden'>
            <SkipLeft cname='flex-none'/>
            <MoreOptions cname='flex-none' />
            <SkipRight cname='flex-none' />
        </div>
    )
}

export default GameControls