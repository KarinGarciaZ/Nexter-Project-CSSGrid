import React, { Component } from 'react';

import icons from '../img/sprite.svg';
import house1 from '../img/house-1.jpeg';
import house2 from '../img/house-2.jpeg';
import house3 from '../img/house-3.jpeg';
import house4 from '../img/house-4.jpeg';
import house5 from '../img/house-5.jpeg';
import house6 from '../img/house-6.jpeg';

export default class Homes extends Component {
  render() {
    return (
      <div className='homes'>

        <div className='home'>
          <img  src={house1} alt='House1' className='home__img'/>
          <svg className='home__like'>
            <use xlinkHref={icons + '#icon-heart-full'}></use>
          </svg>
          <h5 className='home__name'>Beautiful Family House</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref={icons + '#icon-map-pin'}></use>
            </svg>
            <p>USA</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref={icons + '#icon-profile-male'}></use>
            </svg>
            <p>5 rooms</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref={icons + '#icon-expand'}></use>
            </svg>
            <p>325 m<sup>2</sup></p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref={icons + '#icon-key'}></use>
            </svg>
            <p>$650,000.00</p>
          </div>
          <button className='btn home__btn'>Contact realtor</button>
        </div>

        <div className='home'>
          <img  src={house2} alt='House1' className='home__img'/>
          <svg className='home__like'>
            <use xlinkHref={icons + '#icon-heart-full'}></use>
          </svg>
          <h5 className='home__name'>Modern Glass Villa</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref={icons + '#icon-map-pin'}></use>
            </svg>
            <p>Canada</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref={icons + '#icon-profile-male'}></use>
            </svg>
            <p>5 rooms</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref={icons + '#icon-expand'}></use>
            </svg>
            <p>325 m<sup>2</sup></p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref={icons + '#icon-key'}></use>
            </svg>
            <p>$1,650,000.00</p>
          </div>
          <button className='btn home__btn'>Contact realtor</button>
        </div>

        <div className='home'>
          <img  src={house3} alt='House1' className='home__img'/>
          <svg className='home__like'>
            <use xlinkHref={icons + '#icon-heart-full'}></use>
          </svg>
          <h5 className='home__name'>Cozy country house</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref={icons + '#icon-map-pin'}></use>
            </svg>
            <p>UK</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref={icons + '#icon-profile-male'}></use>
            </svg>
            <p>4 rooms</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref={icons + '#icon-expand'}></use>
            </svg>
            <p>35 m<sup>2</sup></p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref={icons + '#icon-key'}></use>
            </svg>
            <p>$250,000.00</p>
          </div>
          <button className='btn home__btn'>Contact realtor</button>
        </div>

        <div className='home'>
          <img  src={house4} alt='House1' className='home__img'/>
          <svg className='home__like'>
            <use xlinkHref={icons + '#icon-heart-full'}></use>
          </svg>
          <h5 className='home__name'>Large Rustical Villa</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref={icons + '#icon-map-pin'}></use>
            </svg>
            <p>Portugal</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref={icons + '#icon-profile-male'}></use>
            </svg>
            <p>5 rooms</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref={icons + '#icon-expand'}></use>
            </svg>
            <p>325 m<sup>2</sup></p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref={icons + '#icon-key'}></use>
            </svg>
            <p>$650,000.00</p>
          </div>
          <button className='btn home__btn'>Contact realtor</button>
        </div>

        <div className='home'>
          <img  src={house5} alt='House1' className='home__img'/>
          <svg className='home__like'>
            <use xlinkHref={icons + '#icon-heart-full'}></use>
          </svg>
          <h5 className='home__name'>Majestic Palace House</h5>
          <div className='home__location'>
            <svg>
              <use xlinkHref={icons + '#icon-map-pin'}></use>
            </svg>
            <p>Germany</p>
          </div>
          <div className='home__rooms'>
            <svg>
              <use xlinkHref={icons + '#icon-profile-male'}></use>
            </svg>
            <p>2 rooms</p>
          </div>
          <div className='home__area'>
            <svg>
              <use xlinkHref={icons + '#icon-expand'}></use>
            </svg>
            <p>325 m<sup>2</sup></p>
          </div>
          <div className='home__price'>
            <svg>
              <use xlinkHref={icons + '#icon-key'}></use>
            </svg>
            <p>$650,000.00</p>
          </div>
          <button className='btn home__btn'>Contact realtor</button>
        </div>

        <div className='home'>

          <img  src={house6} alt='House1' className='home__img'/>
          <svg className='home__like'>
            <use xlinkHref={icons + '#icon-heart-full'}></use>
          </svg>
          <h5 className='home__name'>Modern Family Aparment</h5>

          <div className='home__location'>
            <svg>
              <use xlinkHref={icons + '#icon-map-pin'}></use>
            </svg>
            <p>Italy</p>
          </div>

          <div className='home__rooms'>
            <svg>
              <use xlinkHref={icons + '#icon-profile-male'}></use>
            </svg>
            <p>5 rooms</p>
          </div>

          <div className='home__area'>
            <svg>
              <use xlinkHref={icons + '#icon-expand'}></use>
            </svg>
            <p>325 m<sup>2</sup></p>
          </div>

          <div className='home__price'>
            <svg>
              <use xlinkHref={icons + '#icon-key'}></use>
            </svg>
            <p>$10,650,000.00</p>
          </div>
          <button className='btn home__btn'>Contact realtor</button>

        </div>
        
      </div>
    )
  }
}
