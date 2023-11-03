import React, { useState } from 'react'
import './Navbar.css'
import { GiSettingsKnobs } from 'react-icons/gi'
import { RiArrowDropDownLine } from 'react-icons/ri'
import useGrouping from '../contexts/useGrouping'
import useOrdering from '../contexts/useOrdering'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => setOpen(!open)
    const {setGroupingId} = useGrouping()
    const {setOrderingId} = useOrdering()
    return (
        <nav className="navbar">
            <div className="options" onClick={toggle}>
                <GiSettingsKnobs className='setting' />
                <p>Display</p>
                <RiArrowDropDownLine className='arrow'
                style={{
                    transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
                />
            </div>
            <div className="selection" style={{
                transform: open ? 'scale(1)' : 'scale(0)',
            }}>
                {/* Grouping */}
                <div className="grouping">
                    <h5>Grouping</h5>
                    <select name="grouping" id="grouping" onChange={(e) => setGroupingId(parseInt(e.target.value))}>
                        <option value="0">Status</option>
                        <option value="1">User</option>
                        <option value="2">Priority</option>
                    </select>
                </div>
                {/* Ordering */}
                <div className="ordering">
                    <h5>Ordering</h5>
                    <select name="ordering" id="ordering" onChange={(e) => setOrderingId(parseInt(e.target.value))}>
                        <option value="0">Priority</option>
                        <option value="1">Title</option>
                    </select>
                </div>
            </div>
        </nav>
  )
}

export default Navbar