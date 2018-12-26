import React, { Component } from 'react';
import logo from '../img/logo.png';
import logobbc from '../img/logo-bbc.png';
import logobi from '../img/logo-bi.png';
import logoforbes from '../img/logo-forbes.png';
import logotc from '../img/logo-techcrunch.png';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src={logo} alt='Nexter Logo' className='header__logo' />
        <h3 className='heading-3'>Your own home:</h3>
        <h1 className='heading-1'>The ultimate personal freedom</h1>
        <button className='btn header__btn'>View our properties</button>
        <div className='header__seenon-text'>Seen on</div>
        <div className='header__seenon-logos'>
          <img src={logobbc} alt='Nexter Logo' />
          <img src={logoforbes} alt='Nexter Logo' />
          <img src={logotc} alt='Nexter Logo' />          
          <img src={logobi} alt='Nexter Logo' />
        </div>
      </div>
    )
  }
}
