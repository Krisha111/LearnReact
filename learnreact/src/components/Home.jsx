import React from 'react'

export default function Home() {
    // to dynamically change the date and time
    // const date=new Date(2023,1,1,21)
    const date=new Date()
    const hour=date.getHours()
    const customStylee={
        color:""
    }
    let greeting;
   if(hour<12){
    greeting="Good Morning"
    customStylee.color="yellow"
   }else if(hour<18){
    greeting="Good AfterNoon"
    customStylee.color="pink"
   }else{
    greeting="Good Night"
    customStylee.color="red"
   }
  return (
    <>
    <h1>Home</h1>
    <p style={customStylee}>{greeting}</p>
    </>
  )
}
