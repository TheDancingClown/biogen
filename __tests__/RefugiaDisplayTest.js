import 'react-native';
import React from 'react';
import RefugiaDisplay from '../components/RefugiaDisplay';
import { RefugiumTemplate, Template } from '../src/CardList.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<RefugiaDisplay
    disabled={false}
    cosmicRefugia = {RefugiumTemplate}
    oceanicRefugia = {RefugiumTemplate}
    coastalRefugia = {RefugiumTemplate}
    continentalRefugia = {RefugiumTemplate}
    currentEvent = {Template}/>);
});