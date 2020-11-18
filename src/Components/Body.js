import React, { useState, useEffect } from 'react'
import FirstCard from './FirstCard'
import MoreCards from './MoreCards'
import axios from 'axios'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

function Body() {
  const url = 'https://backend.daviva.lt/API/InformacijaTestui'
  const [initialData, setInitialData] = useState([])
  const [newData, setNewData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setInitialData(response.data)
        setIsLoading(false)
      })
  }, [])

  const handleClick = () => {
    axios.get(url)
      .then((response) => {
        setNewData(items => [...items, response.data])
      })
  }

  return (
    <Container fluid>
      <Jumbotron>
        <Row>
          <FirstCard initialData={initialData} isLoading={isLoading} />
          <MoreCards newData={newData} isLoading={isLoading} />
        </Row>
        <Button onClick={handleClick} variant="primary">Pridėti</Button>
      </Jumbotron>
    </Container>
  )
}

export default Body