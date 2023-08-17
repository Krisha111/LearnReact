// import Home from './components/Home';
import './App.css';
import Props from './components/Props';
import contacts from './components/contacts';


function App() {
  // const num=4
  // const fName="Krisha"
  // const lName="Patel"
  // const name="Angela YU"
  // const currentDate=new Date()
  // const currentYear=currentDate.getFullYear()
  // const image="https://picsum.photos/200"
  // const customStyle={
  //   color:"blue",
  //   fontWeight:50,
  //   border:"1px solid black"
  // }
  // overwriting the color property of custonStyle if in real world project we want to change the property after assigning it a value in past when it was make
  // customStyle.color="green" 

  return (
    <div className="App">
       {/* <Props  name="Angela YU" img="https://imageio.forbes.com/specials-images/imageserve/64bab5fa0ea2466fa9d98952/0x0.jpg?format=jpg&crop=1583,891,x0,y8,safe&width=1200" phone="+1234567890" email="angela@example.com" /> */}



      {/* < Props  name={contacts[0].name} img={contacts[0].img} phone={contacts[0].phone} email={contacts[0].email}/>
      < Props  name={contacts[1].name} img={contacts[1].img} phone={contacts[1].phone} email={contacts[1].email}/>
      < Props  name={contacts[2].name} img={contacts[2].img} phone={contacts[2].phone} email={contacts[2].email}/> */}
   
   {/* u can write the above code or below code of map */}

{contacts.map((contact)=>{
  return(
  < Props  name={contact.name} img={contact.img} phone={contact.phone} email={contact.email}/>
  )
})}




       {/* <Home/> */}



   {/* Babel converts the html inside this all javascript files to browsers understandable code */}
   {/* <h1>My fav food</h1>
   <ul>
    <li>Manchurian</li>
    <li>Pizza</li>
    <li>French Fries</li>
   </ul>
   <h5>My fav num is {num}</h5>
   <h4>My fav num is {Math.floor(Math.random()*10)}</h4>
   <h2>My name is {fName + " " + lName} </h2>
   <h2>My name is {fName} {lName} </h2>
   <h2>My name is {`${fName} ${lName} `}</h2>

   <p>My name is {name}</p>
   <p>Copyright {currentYear}</p>
   {/* <img alt="picsum" src={image }/> */}
   {/* to make the pic gray */}
   {/* <img alt="picsum" src={image + "?grayscale"}/>
   <img className="img-classs" alt="paris" src="https://media.istockphoto.com/id/1145422105/photo/eiffel-tower-aerial-view-paris.jpg?s=612x612&w=0&k=20&c=sFn6FwTJR0TpX3rP_W4VHrbkTB__6l5kr-lkkqdYrtE="/>
   <img className="img-classs" alt="usa" src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/104000/104059-New-York.jpg"/>
   <img className="img-classs" alt="america" src="https://www.travelandleisure.com/thmb/91pb8LbDAUwUN_11wATYjx5oF8Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city-evening-NYCTG0221-52492d6ccab44f328a1c89f41ac02aea.jpg"/>
   
   {/* Inline styles */}
   {/* <h1 style={{color:"red"}}>Hello world</h1>    
    <h1 style={customStyle}>Hello Duniya</h1> */} 
   
    </div>
);
}

export default App;
