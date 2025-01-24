import {Request, Response} from 'express'
import User from '../models/User'
import { hashPassword, checkPassword } from '../utils/auth'

export const createAccount = async (req: Request, res: Response) => {
    
    const {email, password} = req.body

    const userExists = await User.findOne({email})
    if(userExists) {
        const error = new Error('The user already exists')
        res.status(409).json({error: error.message})
        return;
    }

    const user = new User(req.body)
    user.password = await hashPassword(password)

    await user.save()
    res.status(201).send('User created!')
}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body
    // check if user exists
    const userExists = await User.findOne({email})
    if(!userExists) {
        const error = new Error(`User doesn't exists`)
        res.status(409).json({error: error.message})
        return;
    }

    // check password
    const isPasswordCorrect = await checkPassword(password, userExists.password)
    if(!isPasswordCorrect) {
        const error = new Error('Incorrect password')
        res.status(401).json({error: error.message})
        return;
    }

    res.status(200).json({msg:"successful login"})
}