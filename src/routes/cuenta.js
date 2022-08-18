import { Router } from 'express';
import { getAccountById, saveAccount, updateAccount } from '../controllers/cuenta';


const router = Router();


/**
 * @swagger
 * tags:
 *  name: Account
 *  description: Acount endpoint
 */


/**
 * @swagger 
 * /tasks/:id:
 *  get:
 *      summary: Get Account by ID
 */
router.get('/account/:id', getAccountById)

/**
 * @swagger 
 * /tasks:
 *  post:
 *      summary: Create new Account
 */
router.post('/account', saveAccount);


/**
 * @swagger 
 * /tasks/:id:
 *  put:
 *      summary: Update Account by ID
 */
router.put('/account/:id', updateAccount)

export default router;