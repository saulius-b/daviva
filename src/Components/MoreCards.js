import React from 'react'
import Gallery from './Gallery'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

function MoreCards(props) {
  let cards = props.newData.map((item, index) => {
    return (
      <Card style={{ width: '18rem' }} key={index}>
        <Gallery isLoading={props.isLoading} pictures={item.nuotraukos} />
        <Card.Body>
          <Card.Title>{item.marke}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{item.modelis}</ListGroupItem>
          <ListGroupItem>{item.metai}</ListGroupItem>
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