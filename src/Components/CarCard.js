import React from 'react'
import Gallery from '../Components/Gallery'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'



function CarCard(props) {


  return (

    <Card style={{ width: '18rem' }}>        
        <Gallery
          isLoading={props.isLoading}
          pictures={props.data.nuotraukos}
        />
        <Card.Body>
          <Card.Title>{props.data.marke}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{props.data.modelis}</ListGroupItem>
          <ListGroupItem>{props.data.metai}</ListGroupItem>
        </ListGroup>
    </Card>    
  )
}

export default CarCard

