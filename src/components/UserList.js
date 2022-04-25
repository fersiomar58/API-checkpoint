import React from 'react'
import { Spinner } from 'react-bootstrap'
import { UserCard } from './UserCard'

export const UserList = ({list,waiting}) => {
  return (
    <div>{waiting? (
        <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
    ) : (
        list&&React.Children.toArray(list.map(user=><UserCard  user={user}/>))
    )}
      

    </div>
  )
}
