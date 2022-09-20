import React from 'react'

function returnTemprano({condicion}) {

    if (condicion) {
        return <h3>se cumple la condicion</h3>
    }

    return <h3>no se cumple la condicion</h3>
    
}

export default returnTemprano;