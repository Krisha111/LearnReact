import React from 'react'
import Formm from './Formm'


export default function Form(props) {
    let isLoggedin=true
    function conditionall(){
         if(isLoggedin===true){
            return(
                <Formm/>
            )
            }
            else{
              return(       
            <form className='container'>
            <input type={props.type} placeholder={props.placeholder}/>
            {/* <input type="password" placeholder='Password'/> */}
            
        </form>
              )
            }
        
    }
  return (
    <div>
        {conditionall()}
    </div>
  )
}
