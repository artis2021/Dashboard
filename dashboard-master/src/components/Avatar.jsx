import React from 'react'
import { FaCircle } from 'react-icons/fa'
import './Avatar.css'

const Avatar = ({image, name, isAvailable}) => {
    const firstLetter = name[0].toUpperCase()
    const secondLetter = name[1].toUpperCase()
  return (
    <div className="avatar">
        <div className="avatar-img" // background color is random dark color
            style={{
                backgroundColor: `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, 0.7)`,
            }}>
        {
            image ? <img src={image} alt="avatar" /> : <p>{firstLetter}{secondLetter}</p>
        }
        </div>
      <div className="avatar-info">
        {isAvailable ? <FaCircle style={{
            color: '#26f87d',
        }}
            /> : <FaCircle style={{
            color: '#ccc',
            }} />}
      </div>
    </div>
  )
}

export default Avatar