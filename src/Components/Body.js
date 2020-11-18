import React, { useState, useEffect } from 'react'

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import CarCard from '../Components/CarCard'
import Gallery from '../Components/Gallery'


import axios from 'axios'


function Body() {
  const url = 'https://backend.daviva.lt/API/InformacijaTestui'
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [newData, setNewData] = useState([])

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setData(response.data)
        setIsLoading(false)
      })
  }, [])

  const handleClick = () => {
    axios.get(url)
      .then((response) => {
        setNewData(items => [...items, response.data])
      })
    console.log(newData)
  } 

  let cards = newData.map((item) => {
    return <Card style={{ width: '18rem' }}>
      <Gallery
        isLoading={isLoading}
        pictures={item.nuotraukos}
      />
      <Card.Body>
        <Card.Title>{item.marke}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{item.modelis}</ListGroupItem>
        <ListGroupItem>{item.metai}</ListGroupItem>
      </ListGroup>
    </Card>
  })







  return (
    <Container fluid>
      <Jumbotron>
        <Row>
          <CarCard data={data} isLoading={isLoading} />
          {cards}
        </Row>
        <Button onClick={handleClick} variant="primary">Pridėti</Button>
      </Jumbotron>
    </Container>





  )
}

export default Body