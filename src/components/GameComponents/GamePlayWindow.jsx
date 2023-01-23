import React from 'react';
import { MoreOptions } from '../GameComponents/utilities';

function GamePlayWindow (props) {

    return (
        <div className={props.cname}>
            <div className='md:ml-14 md:flex-1 md:flex md:justify-center mt-14 md:mt-0'>
                <img className='' src='src\assets\card3.jpg' alt='Three' />
            </div>
            <MoreOptions cname='hidden max-h-14 max-w-14 md:flex md:mr-1 md:mt-2'/>
        </div>
    )
}

export default GamePlayWindow