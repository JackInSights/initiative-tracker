import React from 'react'

function Combatant() {
    const [name, setName] = React.useState('name')
    const [roll, setRoll] = React.useState('roll') 
    const [userType, setUserType] = React.useState('userType')

    return (
        <div>
            <p>{name}</p>
            <p>{roll}</p>
            <p>{userType}</p>
        </div>
    )
}

export default Combatant
