import express from 'express';
import apfRoutes from './routes/apf'
import customerRoutes from './routes/cliente'
import accountRoutes from './routes/cuenta'
import cors from 'cors'
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swaggerOptions'

const specs = swaggerJSDoc(options)
const app1 = express();
app1.disable("x-powered-by");

let corsOptions = {
    origin: 'localhost.com' // Compliant
};

app1.use(cors(corsOptions));

app1.use(morgan("dev"));
app1.use(express.json());
app1.use(apfRoutes);
app1.use(customerRoutes);
app1.use(accountRoutes);

app1.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app1;