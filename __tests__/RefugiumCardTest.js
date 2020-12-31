import 'react-native';
import React from 'react';
import RefugiumCard from '../components/RefugiumCard';
import { RefugiumTemplate } from '../src/CardList.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<RefugiumCard refugium={RefugiumTemplate} />);
});