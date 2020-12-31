import 'react-native';
import React from 'react';
import Climate from '../components/Climate';
import { Template } from '../src/CardList.js'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Climate climateSequence={[]} />);
});