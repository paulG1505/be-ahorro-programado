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
 * /customer/:id:
 *  get:
 *      summary: Get Customer by ID
 */
router.get('/customer/:id',getCustomer)

/**
 * @swagger 
 * /customer:
 *  post:
 *      summary: Create new Customer
 */
router.post('/customer',saveCustomer);

/**
 * @swagger 
 * /customer/:id:
 *  delete:
 *      summary: Delete customer by ID
 */
router.delete('/customer/:id',deleteCustomer);

/**
 * @swagger 
 * /customer/:id:
 *  put:
 *      summary: Update Customer by ID
 */
router.put('/customer/:id',updateCustomer)

export default router;