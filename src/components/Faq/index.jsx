import React from 'react'
import dataQuestions from './dataQuestions'
import Faq from 'react-faq-component'
import style from './styles.module.css'
import clsx from 'clsx'

const stylesBase = {
  titleTextColor: "black",
  rowTitleColor: "blue",
};

export default function FaqModule() {
  return (
    <div className={clsx('container container-xl container-md')}>
      <div className={style.faq}>
        <Faq
          data={dataQuestions}
          styles={stylesBase}
        />
      </div>
    </div>
  )
}
