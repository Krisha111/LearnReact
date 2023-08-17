import React from 'react'

export default function Conditionall(props) {
  return (
    <>
    <input type="text" placeholder="Username"/>
    <input type="password" placeholder="Password"/>
    {props.isUserRegistered===false &&<input type="password" placeholder="Confirm Password"/>}
    
    <button type="submit">{props.isUserRegistered?"Login":"Register"}</button>
    </>
  )
}
