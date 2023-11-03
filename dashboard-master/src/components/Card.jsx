import React from 'react'
import './Card.css'
import Avatar from './Avatar'
import { FaCircle } from 'react-icons/fa'

const Card = ({ticket, user}) => {
  return (
    <div className="card">
        <div className="top card-section">
            <h5>{ticket.id}</h5>
            <Avatar name={user.name} isAvailable={user.available} />
        </div>
        <div className="mid card-section">
            <h6>
                {ticket.title}
            </h6>
        </div>
        <div className="bottom card-section">
            {ticket.tag.map((tag, index) => (
                <div className="tag" key={index}>
                    <FaCircle style={{
                    color: '#ccc',
                    }} />
                    <p key={index}>{tag}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Card