import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

it('should render an empty table', () => {
  console.log('rendering...');
  render(<Table />);
  console.log('rendered!');
});
