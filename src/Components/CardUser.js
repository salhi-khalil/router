import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
function CardUser({el}) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title>
    <Card.Text>
      {el.profession}
    </Card.Text>
  <Link to ={`/details/${el.id}`}>               <Button variant="primary">details</Button>              </Link>  
  </Card.Body>
</Card>
        </div>
    )
}

export default CardUser
