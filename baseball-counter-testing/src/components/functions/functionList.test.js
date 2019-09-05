import { incrementByOne } from './functionsList';

test('Increment by One increments an input', () => {
    expect(incrementByOne(5)).toBe(6);
    expect(incrementByOne(-1)).toBe(0);
})