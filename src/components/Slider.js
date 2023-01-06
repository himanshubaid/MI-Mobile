
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'//sliding images ke liye use hota hain
import 'bootstrap/dist/css/bootstrap.min.css';
const Slider = ({start}) => {//start ke andar array aya hain
  return (
    <Carousel>
       
       {// item means a[i] in the array start mapping func of array is used to take each item
         start.map((item)=>(
        <Carousel.Item>
            <img
              className="d-block w-100"
              src={item}
              alt="First slide"
            />
          </Carousel.Item>

       ))}
    </Carousel>
  )
}

export default Slider
