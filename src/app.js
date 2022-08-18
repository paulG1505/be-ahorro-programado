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
const app = express();


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(apfRoutes);
app.use(customerRoutes);
app.use(accountRoutes);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))

export default app;