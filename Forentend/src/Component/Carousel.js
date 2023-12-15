import React, { useEffect, useState } from 'react'
import '../assests/carousel.css'
import { dataImg } from './Contants.js'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Carousel = () => {

  const [activeImg, setActiveImg] = useState(0)
  // const [searchTerm, setSearchTerm] = useState('');


  const previousImg = () => {
    setActiveImg(!activeImg ? dataImg.length - 1 : activeImg - 1)
  }

  const nextImg = () => {
    setActiveImg((activeImg + 1) % dataImg.length)
  }
  // const handleSearch = () => {
  //   // Handle search logic here based on the searchTerm
  //   console.log('Searching for:', searchTerm);
  // };

  useEffect(() => {
    let timer = setTimeout(() => {
      nextImg()
    }, 8000)
    return () => {
      clearTimeout(timer)
    }
  }, [activeImg])

  return (
    <>
      <div className='carouselParent'>
        <div className='carouselChildFirst'>
          <button className='previousBtn' onClick={() => previousImg()} ><ArrowBackIosIcon /></button>
          {dataImg.map((item, index) => {
            return (
              <img key={index} src={item} alt='img' className={(activeImg === index ? 'firstclass' : 'secondclass')} />
            )
          })}
          <button className='nextBtn' onClick={() => nextImg()}><ArrowForwardIosIcon /></button>
        </div>

        <div className="carousel-caption d-none d-md-block searchbtn">
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
          </form>
        </div>


      </div>
    </>
  )
}

export default Carousel