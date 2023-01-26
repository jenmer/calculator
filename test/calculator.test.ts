import { calculateExpression } from '../src/calculator';

test('calculateExpression should return correct result for addition', () => {
    const expression = '2+3';
    const result = calculateExpression(expression);
    expect(result).toBe(5);
});

test('calculateExpression should return correct result for subtraction', () => {
    const expression = '5-3';
    const result = calculateExpression(expression);
    expect(result).toBe(2);
});

test('calculateExpression should return correct result for multiplication', () => {
    const expression = '2*3';
    const result = calculateExpression(expression);
    expect(result).toBe(6);
});

test('calculateExpression should return correct result for division', () => {
    const expression = '6/3';
    const result = calculateExpression(expression);
    expect(result).toBe(2);
});

test('calculateExpression should throw error for invalid operator', () => {
    const expression = '6%3';
    expect(() => calculateExpression(expression))
});
