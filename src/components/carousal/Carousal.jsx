import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import item from '../../assets/item.png'
import './Carousal.css'

export default function Carousal() {
  return (

<Carousel>
      <Carousel.Item>
        <img src={item} alt="" />
        <Carousel.Caption>
          <p><span style={{fontSize:'20px',color:'grey'}}>Crystal Agate Phone Grip - </span> <span style={{fontSize:'20px',color:'#317189'}}>18.99$</span></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={item} alt="" />
        <Carousel.Caption>
        <p><span style={{fontSize:'20px',color:'grey'}}>Crystal Agate Phone Grip - </span> <span style={{fontSize:'20px',color:'#317189'}}>18.99$</span></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={item} alt="" />
        <Carousel.Caption>
        <p><span style={{fontSize:'20px',color:'grey'}}>Crystal Agate Phone Grip - </span> <span style={{fontSize:'20px',color:'#317189'}}>18.99$</span></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  )
}
