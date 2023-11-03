import React from 'react'
import Avatar from './Avatar'
import Card from './Card'
import './GroupByUser.css'
import useOrdering from '../contexts/useOrdering'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

const GroupByUser = ({tickets, users}) => {
    const ticketsByUser = users.map(user => {
        return tickets.filter(ticket => ticket.userId === user.id)
    })
    const {orderingId} = useOrdering()
    // Ordering Ids:
    // 0 - Order by Priority
    // 1 - Order by Title
    if(orderingId === 0) {
        ticketsByUser.forEach(ticket => {
            ticket.sort((a, b) => a.priority - b.priority)
        })
    } else if(orderingId === 1) {
        ticketsByUser.forEach(ticket => {
            ticket.sort((a, b) => {
                if(a.title < b.title) {
                    return -1
                }
                if(a.title > b.title) {
                    return 1
                }
                return 0
            })
        })
    }
  return (
    <div className="group-by-user">
        {ticketsByUser.map((ticket, index) => (
            <div className="user" key={index}>
                <div className="user-title">
                    <div className="left">
                        <Avatar name={users[index].name} isAvailable={users[index].available} />
                        <h5>{users[index].name}</h5>
                    </div>
                    <div className="right">
                        <AiOutlinePlus />
                        <BiDotsHorizontalRounded />
                    </div>
                </div>
                {ticket.map((t, idx) => (
                    <Card ticket={t} user={users[index]} key={idx} />
                ))}
            </div>
        ))}
    </div>
  )
}

export default GroupByUser