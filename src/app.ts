import express from 'express';
import bodyParser from 'body-parser';
import { calculateExpression } from './calculator';

const app = express()

app.use(bodyParser.json());

app.post('/calculate', (req: express.Request, res: express.Response) => {
    const expression = req.body.expression;
    const result = calculateExpression(expression);
    res.json({ result });
});

module.exports = app;
