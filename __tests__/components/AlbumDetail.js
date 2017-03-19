import 'react-native';
import React from 'react';
import AlbumDetail from '../../src/components/AlbumDetail'

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <AlbumDetail album={ {title: 'A River Runs Through It'} } />
  );
});
