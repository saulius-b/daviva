import React from 'react'
import Gallery from './Gallery'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function FirstCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Gallery
        isLoading={props.isLoading}
        pictures={props.initialData.nuotraukos}
      />
      <Card.Body>
        <Card.Title>{props.initialData.marke}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{props.initialData.modelis}</ListGroupItem>
        <ListGroupItem>{props.initialData.metai}</ListGroupItem>
      </ListGroup>
    </Card>
  )
}

export default FirstCard

