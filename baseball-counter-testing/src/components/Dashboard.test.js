import React from 'react';
import { render } from '@testing-library/react'
import Dashboard from './Dashboard';

test('Dashboard renders without error', () => {
    render(<Dashboard />);
})

test('Contains strike, ball, foul, and hit buttons', () => {
    const { getByText } = render(<Dashboard />)
    getByText(/strike/i);
    getByText(/ball/i);
    getByText(/foul/i);
    getByText(/hit/i);
})