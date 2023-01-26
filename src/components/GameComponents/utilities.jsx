import React from 'react'

const SkipLeft = (props) => {

    return (
        <button type='button' className={props.cname}>
            <img className='flex-none' src='src\assets\btn-skip-left.png' />
        </button>
    )
}

const SkipRight = (props) => {

    return (
        <button type='button' className={props.cname}>
            <img className='flex-none' src='src\assets\btn-skip-right.png' />
        </button>
    )
}

const MoreOptions = (props) => {

    return (
        <button type='button' className={props.cname}>
            <img className='flex-none' src='src\assets\btn-more-options.png' />
        </button>
    )
}

export { SkipLeft, SkipRight, MoreOptions }