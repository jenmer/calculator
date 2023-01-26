/**
 * A function that calculates a mathematical expression.
 * @param {string} expression - The mathematical expression to calculate.
 * @returns {number} - The result of the calculation
 */

export function calculateExpression(expression: string): number {
    let result = 0;
    let terms = expression.match(/\d+/g);
    let operators = expression.match(/[+\-*/]/g);

    if (!operators || !terms) {
        throw new Error("Invalid expression provided");
    }

    result = parseInt(terms[0]);

    for (let i = 0; i < operators.length; i++) {
        let operator = operators[i];
        let term = parseInt(terms[i + 1]);

        switch (operator) {
            case '+':
                result += term;
                break;
            case '-':
                result -= term;
                break;
            case '*':
                result *= term;
                break;
            case '/':
                result /= term;
                break;
            default:
                throw new Error(`Invalid operator ${operator} provided`);
        }
    }

    return result;
}
