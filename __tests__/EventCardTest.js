import 'react-native';
import React from 'react';
import EventCard from '../components/EventCard';
import { Template } from '../src/CardList.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<EventCard card={Template} />);
});