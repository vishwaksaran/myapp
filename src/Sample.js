import React from 'react'

const Sample = (props) => {
    const {nam,id}=props;
    return (
        <div>
            <h6>{`Name: ${nam} ID: ${id} `}</h6>
        </div>
    )
}

export default Sample
