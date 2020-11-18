import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Gallery(props) {
  const loadStatus = props.isLoading
  let pictures = props.pictures  

  if (loadStatus === true) {
    pictures = ''
  } else if (loadStatus === false) {
    pictures = pictures.map((item, index) => {
      return (
        <Carousel.Item key={index}>
          <img className="d-block w-100" src={item} alt={index}/>
        </Carousel.Item>)
    })
  }

  return (
    <Carousel indicators={false} interval={null}>
      {pictures}
    </Carousel>
  )
}

export default Gallery


