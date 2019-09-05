import React from 'react';
import { render } from '@testing-library/react'
import Display from './Display';

test('Display renders without error', () => {
    render(<Display />);
})

test('Contains header ', () => {
    const { getByText } = render(<Display />)
    getByText(/baseball dashboard/i);
})

test('Contains scoreboard ', () => {
    const { getByText } = render(<Display />)
    getByText(/Team:/i);
    getByText(/Team 1/i);
    getByText(/Team 2/i);
    getByText(/ball:/i);
    getByText(/Strike:/i);
    getByText(/outs:/i);
})