import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Title from './Title';

describe('Title Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Title title="Hello World" />);
    expect(getByText('Hello World')).toBeTruthy();
  });
});
