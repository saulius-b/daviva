import React from 'react'
import Gallery from './Gallery'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


function FirstCard(props) {
  return (
    <Card style={{ width: '18rem' }} className='text-center mx-2 my-2'>
      <Gallery isLoading={props.isLoading} pictures={props.initialData.nuotraukos} />
      <Card.Body>
        <Card.Title>{props.initialData.marke}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Modelis: {props.initialData.modelis}</ListGroupItem>
        <ListGroupItem>Metai: {props.initialData.metai}</ListGroupItem>
        <ListGroupItem className='border border-success font-weight-bold'>Kaina: {props.initialData.kaina} €</ListGroupItem>
      </ListGroup>
    </Card>
  )
}

export default FirstCard

