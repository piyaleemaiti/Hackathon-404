import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Order from '../../src/Order';
import {AccessProvider} from '../../src/utils/AppContext/loginContext';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
fetch = jest.fn(() => Promise.resolve());
const props = {
  navigate: jest.fn(),
  route: {
    params: {},
  },
};

it('renders correctly', async () => {
  const container = renderer.create(
    <AccessProvider>
      <Order {...props} />
    </AccessProvider>,
  );
  expect(container).toMatchSnapshot();
});
