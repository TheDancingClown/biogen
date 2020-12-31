import 'react-native';
import React from 'react';
import DiceResults from '../components/DiceResults';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<DiceResults result={{1:1, 2:2, 3:3, 4:4, 5:5, 6:6}} />);
});