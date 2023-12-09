import React from 'react'
import css from './Friends.module.css'

const Friends = ({friendArr}) => {
  return (
    <ul className={css.friendsList}>
      {friendArr.map((friend) => {
        const online = friend.isOnline ? 'green' : 'red';
        return (
          <li className={css.friendCard} key={friend.id}>
            <div className={css.isOnline} style={{backgroundColor: online}}></div>
            <img className={css.friendAvatar} alt="User avatar" src={friend.avatar}/>
            <div className={css.name}>{friend.name}</div>
          </li>
      )
    })}
    </ul>
  )
}

export {Friends}