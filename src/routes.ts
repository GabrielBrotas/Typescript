import { Request, Response } from 'express'
import createUser from './services/CreateUser'

// string, number, boolean, array, object

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: "gabriel@gmail.com",
        password: "123456",
        techs: [
            'node',
            'react',
            'javascript',
            {title: 'React Native', experience: 9}
        ]
    })

    return response.json({message: "Hello world"})
}