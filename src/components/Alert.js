import React from 'react'

const Alert = ({alert,type}) => {
    return (
        <div className={`alert alert-${type}`}>
           <h4 className="text-center">{alert}</h4> 
        </div>
    )
}

export default Alert
