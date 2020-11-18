import React from 'react'

import Carousel from 'react-bootstrap/Carousel'


import SwiperCore, { Navigation } from 'swiper';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
SwiperCore.use([Navigation]);

function Gallery(props) {
  const loadStatus = props.isLoading
  const pictures = props.pictures

  let showPictures = ''
  if (loadStatus === true) {
    showPictures = ''
  } else if (loadStatus === false) {
    showPictures = pictures
  }

  return (
    <Carousel indicators={false} interval={null}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={showPictures[0]}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={showPictures[1]}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={showPictures[2]}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={showPictures[3]}
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={showPictures[4]}
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default Gallery


{/* <Swiper spaceBetween={1} slidesPerView={1} navigation>
      <SwiperSlide><img src={showPictures[0]} alt='CarPicture 1'></img></SwiperSlide>
      <SwiperSlide><img src={showPictures[1]} alt='CarPicture 2'></img></SwiperSlide>
      <SwiperSlide><img src={showPictures[2]} alt='CarPicture 3'></img></SwiperSlide>
      <SwiperSlide><img src={showPictures[3]} alt='CarPicture 4'></img></SwiperSlide>
      <SwiperSlide><img src={showPictures[4]} alt='CarPicture 5'></img></SwiperSlide>
    </Swiper> */}