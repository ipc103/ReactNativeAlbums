import 'react-native';
import React from 'react';
import Card from '../../src/components/Header'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Card />
  );
});
