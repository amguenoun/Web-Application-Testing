import { incrementByOne, translateBase } from './functionsList';

test('Increment by One increments an input', () => {
    expect(incrementByOne(5)).toBe(6);
    expect(incrementByOne(-1)).toBe(0);
})

test('translate base returns base from hits', () => {
    expect(translateBase(0)).toBe(0);
    expect(translateBase(1)).toBe('1st Base');
    expect(translateBase(2)).toBe('2nd Base');
    expect(translateBase(3)).toBe('3rd Base');
})