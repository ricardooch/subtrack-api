import { Router } from "express";
import { body } from "express-validator";

const router = Router()

router.get('/', function(req, res) {
    res.send('Hello world, the API is alive!')
})

export default router