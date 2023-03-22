import React from 'react'
import './Slider.css'
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


const Slider = () => {
  const slides =[1,2,3,4,5,6,7,8]


  return (
    <>
      <div className='slider_container'>
<ArrowBackIosIcon size={30} className='slider-icon left'/>
<div className='slider'>
  {
    slides.map((slide,index)=>{
      return(
        <div className='slider_card'>
    
        </div>
      )
    })

  }
</div>
<ArrowForwardIosIcon  size={30} className='slider-icon right'/>

      </div>
    </>
  )
}

export default Slider
