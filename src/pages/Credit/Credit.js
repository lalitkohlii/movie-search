import React from 'react'
import { useParams } from 'react-router-dom'

function Credit() {
    const {id,type} = useParams()
    return (
        <div>
            Credit {type} {id} 
        </div>
    )
}

export default Credit
