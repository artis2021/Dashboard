import React from 'react'
import useOrdering from '../contexts/useOrdering'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Card from './Card'
import './GroupByStatus.css'

const GroupByStatus = ({tickets, users}) => {
    // First get all the unique status
    // Then filter the tickets based on the status
    
    const uniqueStatus = [...new Set(tickets.map(ticket => ticket.status))]
    const ticketsByStatus = uniqueStatus.map(status => {
        return tickets.filter(ticket => ticket.status === status)
    })

    // Ordering Ids:
    // 0 - Order by Priority
    // 1 - Order by Title
    const {orderingId} = useOrdering()

    if(orderingId === 0) {
        ticketsByStatus.forEach(ticket => {
            ticket.sort((a, b) => a.priority - b.priority)
        })
    }
    else if(orderingId === 1) {
        ticketsByStatus.forEach(ticket => {
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

    const findUser = (id) => {
        return users.find(user => user.id === id)
    }

  return (
    <div className="group-by-status">
        {
            ticketsByStatus.map((ticket, index) => (
                <div className="status" key={index}>
                    <div className="status-title">
                        <div className="left">
                            <h5>{uniqueStatus[index]}</h5>
                        </div>
                        <div className="right">
                            <AiOutlinePlus />
                            <BiDotsHorizontalRounded />
                        </div>
                    </div>
                    {
                        ticket.map((t, idx) => (
                            <Card ticket={t} user={findUser(t.userId)} key={idx} />
                        ))
                    }
                    
                </div>
            ))
        }
    </div>
  )
}

export default GroupByStatus