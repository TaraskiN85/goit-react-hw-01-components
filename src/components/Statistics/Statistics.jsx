import React from 'react';
import css from './Statistics.module.css'

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const Statistics = ({stats, title = ""}) => {
  const { docx, mp3, mp4, pdf } = stats

  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statsList}>
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
          <span className={css.label}>.docx</span>
          <span className={css.percentage}>{docx}</span>
        </li>
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
          <span className={css.label}>.mp3</span>
          <span className={css.percentage}>{mp3}</span>
        </li>
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
          <span className={css.label}>.pdf</span>
          <span className={css.percentage}>{mp4}</span>
        </li>
        <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
          <span className={css.label}>.mp4</span>
          <span className={css.percentage}>{pdf}</span>
        </li>
      </ul>
    </section>
  )
}

export {Statistics}