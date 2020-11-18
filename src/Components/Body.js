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

  function handleErrors(err) {
    if (err.response) {
      alert('Issue with the response, error code: ' + err.response.status)
    } else if (err.request) {
      alert('Issue the with the request')
    } else {
      alert('Error', err.message)
    }
  }

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        setInitialData(response.data)
        setIsLoading(false)
      })
      .catch(handleErrors)
  }, [])

  function handleClick() {
    axios.get(url)
      .then((response) => {
        setNewData(items => [...items, response.data])
      })
      .catch(handleErrors)
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