import { Router } from "express";
import { body } from "express-validator";
import { createAccount } from "./handlers";
import { handleInputErrors } from "./middleware/validation";

const router = Router()

router.get('/', function(req, res) {
    res.send('Hello world, the API is alive!')
})

router.post('/auth/register',
    body('name')
        .notEmpty()
        .withMessage(`The name field can't be empty`),   
    body('email')
        .isEmail()
        .withMessage('The email is not valid'),
    body('password')
        .isLength({min: 8, max: 20})
        .withMessage("Password length must be between 8 and 20 characters"),
    handleInputErrors,
    createAccount
)

export default router