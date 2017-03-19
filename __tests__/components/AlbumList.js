import 'react-native';
import React from 'react';
import AlbumList from '../../src/components/AlbumList'

import {fetch} from 'whatwg-fetch';
window.fetch = fetch;

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <AlbumList />
  );
});
