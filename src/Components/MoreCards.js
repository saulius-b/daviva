import React from 'react'
import Gallery from './Gallery'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


function MoreCards(props) {
  let cards = props.newData.map((item, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index} className='text-center mx-2 my-2'>
        <Gallery isLoading={props.isLoading} pictures={item.nuotraukos} />
        <Card.Body>
          <Card.Title>{item.marke}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Modelis: {item.modelis}</ListGroupItem>
          <ListGroupItem>Metai: {item.metai}</ListGroupItem>
          <ListGroupItem className='border border-success font-weight-bold'>Kaina: {item.kaina} €</ListGroupItem> 
        </ListGroup>
      </Card>
    )
  })

  return (
    <>
      {cards}
    </>
  )
}

export default MoreCards