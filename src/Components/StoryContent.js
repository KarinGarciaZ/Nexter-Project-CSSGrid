import React, { Component } from 'react'

export default class StoryContent extends Component {
  render() {
    return (
      <div className='story__content'>
        <h3 className='heading-3 mb-sm'>Happy Customers</h3>
        <h2 className='heading-2 heading-2--dark mb-md'>&ldquo;The best decision of our lives&rdquo;</h2>
        <p className='story__text mb-lg'>
          El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir 
          la presentación de elementos gráficos en documentos. 
        </p>
        <button className='btn'>Find your ouw home</button>
      </div>
    )
  }
}
