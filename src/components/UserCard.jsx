import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const UserCard = ({user}) => {
  return (
    <div className='card'>
        <Card style={{ width: '18rem' }}>
  {/* <Card.Img variant="top" src="holder.js/100px180" />s */}
  <Card.Body>
    <Card.Title>{user.name}</Card.Title>
    <Card.Text>
     {user.email}
    </Card.Text>
    <p>{user.phone}</p>
    <Link to={`/info/${user.id}`} >  <Button className='btn' variant="primary">INFO</Button></Link>
  </Card.Body>
</Card>
    </div>
  )
}
