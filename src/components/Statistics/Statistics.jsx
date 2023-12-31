import React from 'react';
import css from './Statistics.module.css'

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const Statistics = ({stats, title = ""}) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statsList}>
        {stats.map(item => <li className={css.item} key={item.id} style={{backgroundColor: getRandomHexColor()}}>
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage}</span>
        </li>)}
      </ul>
    </section>
  )
}

export {Statistics}