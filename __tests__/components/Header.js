import 'react-native';
import React from 'react';
import Header from '../../src/components/Header'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Header headerText="Some Header!" />
  );
});
