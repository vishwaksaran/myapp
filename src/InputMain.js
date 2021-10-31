import React from 'react'
import {useState} from 'react';

const InputMain = ({setB}) => {
    return (
        <input onChange={(t)=> setB(t.target.value)}>
            
        </input>
    )
}

export default InputMain
