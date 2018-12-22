import React, { Component } from 'react';
import icons from '../img/sprite.svg';

export default class Features extends Component {
  render() {
    return (
      <div className='features'>

        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref={icons + '#icon-global'}></use>
          </svg>
          <h4 className='heading-4 heading-4--dark'>World's best luxury homes</h4>
          <p className='feature__text'>
            El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir 
            la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. 
          </p>
        </div>

        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref={icons + '#icon-trophy'}></use>
          </svg>
          <h4 className='heading-4 heading-4--dark'>Only the best properties</h4>
          <p className='feature__text'>
            El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir 
            la presentación de elementos gráficos en documentos. 
          </p>
        </div>

        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref={icons + '#icon-map-pin'}></use>
          </svg>
          <h4 className='heading-4 heading-4--dark'>All homes in top locations</h4>
          <p className='feature__text'>
            El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir 
            la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. 
          </p>
        </div>

        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref={icons + '#icon-key'}></use>
          </svg>
          <h4 className='heading-4 heading-4--dark'>New home in one week</h4>
          <p className='feature__text'>
            El Lorem Ipsum fue concebido como un texto de relleno.
          </p>
        </div>

        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref={icons + '#icon-presentation'}></use>
          </svg>
          <h4 className='heading-4 heading-4--dark'>1% realtors</h4>
          <p className='feature__text'>
            El Lorem Ipsum fue concebido como un texto de relleno, formateado de una cierta manera para permitir.
          </p>          
        </div>

        <div className='feature'>
          <svg className='feature__icon'>
            <use xlinkHref={icons + '#icon-lock'}></use>
          </svg>
          <h4 className='heading-4 heading-4--dark'>Secure payments</h4>
          <p className='feature__text'>
            Formateado de una cierta manera para permitir la presentación de elementos gráficos en documentos, sin necesidad de una copia formal. 
          </p>
        </div>

      </div>
    )
  }
}
