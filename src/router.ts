import { Router } from "express";
import { body } from "express-validator";
import { createAccount } from "./handlers";

const router = Router()

router.get('/', function(req, res) {
    res.send('Hello world, the API is alive!')
})

router.post('/auth/register', createAccount)

export default router