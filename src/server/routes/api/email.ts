import { Router } from 'express';
import { knexDB } from '../../db/queries';

let router = Router();

router.post('/', async (req, res) => {
    try {
        let emailReq = await knexDB('email_list').insert(req.body)
        res.json(emailReq);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
})

export default router;