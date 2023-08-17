import React from 'react'
import Image from './Image'
import Details from './Details'

export default function Props(props) {
    
  return (
    <div>
        
        <h1>{props.name}</h1> 
        <img alt="beyonce" className="img-classs" src={props.img}/>
        {/* to get image/component from outside of file */}
        <Image image={props.img}/>
         {/* <h5>{props.phone}</h5>
        <p>{props.email}</p> */}
        <Details detailinfo={props.email}/>
        <Details detailinfo={props.phone}/>
        {/* <h1>Beyonce</h1>
        <img alt="beyonce" className="img-classs" src="https://imageio.forbes.com/specials-images/imageserve/64bab5fa0ea2466fa9d98952/0x0.jpg?format=jpg&crop=1583,891,x0,y8,safe&width=1200"/>
        <h5>+91 5479354937</h5>
        <p>beyonce@gmail.com</p>
        <h1>Kartik Aryan</h1>
        <img alt="jack" className='img-classs' src="https://m.economictimes.com/thumb/msid-96317355,width-1200,height-900,resizemode-4,imgsize-180422/kartik-aaryan-undergoing-major-physical-makeover-for-kabir-khans-upcoming-movie.jpg"/>
        <h5>+91 6493648359</h5>
        <p>kartik@gmail.com</p>
        <h1>kiara advani</h1>
        <img alt="kiara" className='img-classs' src="https://assets.vogue.in/photos/5ff7dc13c53325b92110a7f1/4:3/w_1080,h_810,c_limit/Kiara%20Advani.jpg" />
        <h5>+91 7602649367</h5>
        <p>kiara@gmail.com</p> */}
    </div>
  )
}
