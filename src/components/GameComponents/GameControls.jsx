import React from "react";
import { SkipLeft, SkipRight, MoreOptions } from '../GameComponents/GameUtilities';

function GameControls (props) {

    return (
        <div className={props.cname}>
            <SkipLeft cname='flex-none'/>
            <MoreOptions cname='flex-none' />
            <SkipRight cname='flex-none' />
        </div>
    )
}

export default GameControls