import React from 'react'
import css from "./Profile.module.css"

const Profile = ({userData}) => {
  const { username, location, avatar, stats, tag } = userData;
  const { followers, likes, views } = stats;
  return (
    <div className={css.profile}>
    <div className={css.description}>
      <img
        src={avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  
    <ul className={css.stats}>
      <li>
          <span className={css.label}>Followers</span>
          <span className={css.statsData}>{followers}</span>
      </li>
      <li>
          <span className={css.label}>Views</span>
          <span className={css.statsData}>{views}</span>
      </li>
      <li>
        <span className={css.label}>Likes</span>
          <span className={css.statsData}>{likes}</span>
      </li>
    </ul>
  </div>
  )
}

export {Profile} 