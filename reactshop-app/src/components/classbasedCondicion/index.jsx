import React from 'react'
import './style.css';

const classCondicion = ({condicion}) => {
    return (
        <div className={condicion ? 'clss-true' : 'class.false'}>

        </div>
    )
}

export default classCondicion