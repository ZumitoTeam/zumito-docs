import React from 'react'
import dataQuestions from './dataQuestions'
import Faq from 'react-faq-component'

const styles = {
  // bgColor: 'white',
  titleTextColor: "black",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

export default function FaqModule() {
  return (
    <div>
      <Faq
        data={dataQuestions}
        styles={styles}
        config={config}
      />
    </div>
  )
}
