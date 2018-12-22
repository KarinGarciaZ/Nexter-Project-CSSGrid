import React, { Component } from 'react';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Realtors from '../Components/Realtors';
import Features from '../Components/Features';
import StoryPictures from '../Components/StoryPictures';
import StoryContent from '../Components/StoryContent';
import Homes from '../Components/Homes';
import Gallery from '../Components/Gallery';
import Footer from '../Components/Footer';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='sidebar'>
          <Sidebar />
        </div>

        <Header />

        <div className='realtors'>
          <Realtors />
        </div>

        
        <Features />

        <StoryPictures />

        <StoryContent />

        <Homes />

        <div className='gallery'>
          <Gallery />
        </div>

        <div className='footer'>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home;