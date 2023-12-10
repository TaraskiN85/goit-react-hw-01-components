import React from 'react'
import css from './FriendList.module.css'
import { FriendListItem } from './FriendListItem'

export const FriendList = ({friendArr}) => {
  return (
    <ul className={css.friendsList}>
      {friendArr.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
      )
    })}
    </ul>
  )
}

