import React from 'react'
import css from './FriendList.module.css'

export const FriendListItem = ({name, avatar, isOnline}) => {
  const online = isOnline ? 'green' : 'red';
  return (
    <li className={css.friendCard}>
      <span className={css.isOnline} style={{ backgroundColor: online }}></span>
      <img className={css.friendAvatar} alt="User avatar" src={avatar}/>
      <p className={css.name}>{name}</p>
    </li>
  )
}

