// const animals=[
//     {
//         name:"cat",
//         sound:"meow"
//     },
//     {
//         name:"dog",
//         sound:"bark"
//     }
// ]
// export default animals;

//----------------------------------------------------------------

// const animals=[
//     {
//         name:"cat",
//         sound:"meow", 
//         fright:{
//             food:2,
//             water:4
//         }
//     },
//     {
//         name:"dog",
//         sound:"bark"
//     }
// ]
function careAnimals(){
    const animals=[
        {
            name:"cat",
            sound:"meow", 
            fright:{
                food:2,
                water:4
            }
        },
        {
            name:"dog",
            sound:"bark"
        }
    ]
    return[
        animals.name,
        function (){
            console.log(animals.sound)
        }
    ]
}
// export default animals;
export default careAnimals