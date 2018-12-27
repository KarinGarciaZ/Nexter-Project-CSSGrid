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
        
        <Sidebar />

        <Header />

        <Realtors />

        <Features />

        <StoryPictures />

        <StoryContent />

        <Homes />

        <Gallery />

        <Footer />
      </div>
    )
  }
}

export default Home;