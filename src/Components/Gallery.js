import React from 'react'

import Carousel from 'react-bootstrap/Carousel'


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


