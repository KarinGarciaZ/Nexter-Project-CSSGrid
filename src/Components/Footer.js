import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <ul className='nav'>
          <li className='nav__item'><a href='#' className='nav__link'>Find your dream home</a></li>
          <li className='nav__item'><a href='#' className='nav__link'>Request Proposal</a></li>
          <li className='nav__item'><a href='#' className='nav__link'>Download home planer</a></li>
          <li className='nav__item'><a href='#' className='nav__link'>Contact us</a></li>
          <li className='nav__item'><a href='#' className='nav__link'>Submit your property</a></li>
          <li className='nav__item'><a href='#' className='nav__link'>Come work with us!</a></li>
        </ul>
        <p className='copyright'>
          &copy; Copyright 2018 by Karin García.
        </p>
      </div>
    )
  }
}
