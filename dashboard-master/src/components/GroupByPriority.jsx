import React from 'react'
import useOrdering from '../contexts/useOrdering'
import './GroupByPriority.css'
import { AiOutlinePlus } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import Card from './Card'

/*

- Urgent (Priority level 4)
- High (Priority level 3)
- Medium (Priority level 2)
- Low (Priority level 1)
- No priority (Priority level 0)

*/
const mapping = {
    0: 'No Priority',
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Urgent',
}


const GroupByPriority = ({tickets, users}) => {
    const uniquePriority = [...new Set(tickets.map(ticket => ticket.priority))]
    // sort the unique priority
    uniquePriority.sort((a, b) => a - b)
    const ticketsByPriority = uniquePriority.map(priority => {
        return tickets.filter(ticket => ticket.priority === priority)
    })

    const {orderingId} = useOrdering()

    if(orderingId === 0) {
        ticketsByPriority.forEach(ticket => {
            ticket.sort((a, b) => a.priority - b.priority)
        })
    }
    else if(orderingId === 1) {
        ticketsByPriority.forEach(ticket => {
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
    <div className="group-by-priority">
    {
        ticketsByPriority.map((ticket, index) => (
            <div className="priority" key={index}>
                <div className="priority-title">
                    <div className="left">
                        <h5>{mapping[uniquePriority[index]]}</h5>
                        <h5>{uniquePriority[index]}</h5>
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

export default GroupByPriority