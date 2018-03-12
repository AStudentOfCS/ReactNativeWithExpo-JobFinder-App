import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { text: 'Welcome to JobFinder App!', color: '#03A9F4'},
  { text: 'Use this to find your job.', color: '#009688'},
  { text: 'Set your location, then swipe away.', color: '#057842'}
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }
  render () {
    return (
      <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;