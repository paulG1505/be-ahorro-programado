import { Router } from 'express';
import { getCustomer,saveCustomer,deleteCustomer,updateCustomer } from '../controllers/cliente';


const router = Router();


/**
 * @swagger
 * tags:
 *  name: Customer
 *  description: Customer endpoint
 */


/**
 * @swagger 
 * /tasks/:id:
 *  get:
 *      summary: Get Customer by ID
 */
router.get('/customer/:id',getCustomer)

/**
 * @swagger 
 * /tasks:
 *  post:
 *      summary: Create new Customer
 */
router.post('/customer',saveCustomer);

/**
 * @swagger 
 * /tasks/:id:
 *  delete:
 *      summary: Delete customer by ID
 */
router.delete('/customer/:id',deleteCustomer);

/**
 * @swagger 
 * /tasks/:id:
 *  put:
 *      summary: Update Customer by ID
 */
router.put('/customer/:id',updateCustomer)

export default router;