import React from 'react';
import App from './App';
import ShallowRenderer from 'react-test-renderer/shallow';

test('renders the div with className App', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App/>);
  const result = renderer.getRenderOutput();
  expect(result.type).toBe('div');
});
