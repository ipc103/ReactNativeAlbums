import 'react-native';
import React from 'react';
import CardSection from '../../src/components/CardSection'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <CardSection />
  );
});
