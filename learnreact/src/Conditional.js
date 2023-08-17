import React from 'react'
import Conditionall from './components/Conditionall'

export default function Conditional() {
  const isRegistered=false
  return (
    <Conditionall isUserRegistered={isRegistered}/>
  )
}
