import React from 'react'
import Sample from './Sample.js'

const Check = () => {
    const ar =[{nam:"vishwa",id:"1"},{nam:"vishnu",id:"2"}];
    return (
        <div>
            {ar.map((t)=>(
                <Sample nam={t.nam}></Sample>

            ))}
        </div>
    )
}

export default Check
