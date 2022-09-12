import { Router } from 'express';
import { getParametric,updateTask } from '../controllers/apf';


const router = Router();


/**
 * @swagger
 * tags:
 *  name: APF
 *  description: APF optiones
 */


/**
 * @swagger 
 * /apf:
 *   get:
 *     summary: Get Product Financial Saving
 *     description: All parameterization
 */
router.get('/apf',getParametric);

/**
 * @swagger 
 * /apf/:id:
 *  put:
 *      summary: Update Task
 */
router.put('/apf/:id',updateTask)

export default router;