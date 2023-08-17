// import React from 'react'

export default function Map(){
    // const numbers=[3,56,3,82,8]
    const krisha=[
        {
            meaning:"gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg1092"
        }, 
        {
            meaning:"gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg1092"
        },
        {
            meaning:"gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg1092"
        }

    ]
    // const newNumbers=[]
    // let newNum=0 
  return(

    // for reduce 


// //    numbers.forEach(function(x){
// //      newNum+=x
// //      console.log(newNum)
// // })
// numbers.reduce(function(accumulator,currentNum){
//     // console.log(accumulator)
//     // console.log(currentNum)
//    return accumulator+currentNum
//    })


//for map

//  numbers.map(function(x){
//     return x*2
//  })


// numbers.forEach(function(x){
//     newNumbers.push(x*2)
//     console.log(newNumbers)
// })

//for filter

// numbers.filter(function(x){
//     return x>10
// })

// numbers.forEach(function(x){
//     if(x<10){
//         newNumbers.push(x)
//     }
//     console.log(newNumbers)
// })


//for find- which returns that first number only that satisfy the given condition

// numbers.find(function(x){
//     return x>10
// })

//for findIndex which returns the index of that number
    
// numbers.findIndex(function(x){
//     return x>10
// })

krisha.map(function(x){
    return x.meaning.substring(0,100)
})
  
  )
 
}


