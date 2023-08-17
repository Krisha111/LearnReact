//---------------------------------One way of conditional rendering----------------------------------
// import React from 'react'

// export default function Ternery() {
//     const isLogged=false
//     function renderconditionally(){
//         if(isLogged){
//             return(
//                 <h1>Hello User</h1>
//             )
//         }
//         else{
//         return(      
//     <form className='container'>
//     <input type="text" placeholder="UserName"/>
//     <input type="password" placeholder='Password'/>
//     <button type="submit">Submit</button>
// </form>
//         )
//         }
//     }
//   return (
//     <>
// {renderconditionally()}
//     </>
//   )
// }

//------------------------------secong way of conditional rendering--------------------------------------

import React from 'react'
import Login from './components/Login'

export default function Ternery() {
    const isLogged=false
    const currentHour=new Date().getHours()
    // function renderconditionally(){
    //     if(isLogged){
    //         return(
    //             <h1>Hello User</h1>
    //         )
    //     }
    //     else{
    //     return(      
    // <Login/>
    //     )
    //     }
    // }
  return (
    <>
    {/* one way of rendering that is by calling function after defining the logic in function */}
{/* {renderconditionally()} */}

{/* 
This is rendering the condtional statements using ternery operators */}
{/* {isLogged?<h1>Hello User</h1>: <Login/>} */}
{/* -------------------------------------------OR------------------------------- */}
{/* {isLogged===true?<h1>Hello User</h1>: <Login/>} */}



{/* U have to use this when u want to render one statement if the condition is true otherwise render nothing */}
{/* {currentHour>20?<h1>Why are you still working????</h1>:null} */}


{/* the && operator will return true if both the condition is true , if first is false it will not check the second condition */}

{/* currentHour is based on 24 hours clock */}
{currentHour>20&&<h1>Why are you still working????</h1>}
    </>
  )
}


