import 'react-native';
import React from 'react';
import GameStatus from '../components/GameStatus';
import { Template } from '../src/CardList.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<GameStatus currentEvent={Template} />);
});